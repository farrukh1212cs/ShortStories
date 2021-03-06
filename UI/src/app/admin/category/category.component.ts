import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: []
})
export class CategoryComponent implements OnInit {

  postCategoryForm!: FormGroup;

  public serverErrors: string[] = [];
  public showSuccessMsg = false;
  public showFailureMsg = false;
  public successMsg: string = "";
  constructor(private fb: FormBuilder,
    private api: ApiService,) { }

  ngOnInit(): void {


    this.postCategoryForm = this.fb.group({
      Name: ["", Validators.required],
      Description: ["", Validators.required]
    });
  }


  get ssForm() {
    return this.postCategoryForm.controls;
  }

  postCategory() {
    console.log(this.postCategoryForm.value);
    this.api.postCategory(this.postCategoryForm.value).subscribe(
      res => {
      },
      err => {
        this.serverErrors = [];
        if (err.status === 400) {
          Object.keys(err.error.errors).forEach(key => {
            this.serverErrors.push(err.error.errors[key][0]);
          });
        }
        else if (err.status === 500) {
          console.log(err);
          this.serverErrors.push(err.error);
        }
        else if (err.status === 0) {
          console.log(err);
          this.serverErrors.push("API Service seems to be down.");
        }
        else {
          this.serverErrors.push(err.message);
        }
        this.showFailureMsg = true;
        this.showSuccessMsg = false;
      },
      () => {
        this.postCategoryForm.reset();
        this.successMsg = "Category Posted Successfully!";
        this.showFailureMsg = false;
        this.showSuccessMsg = true;
        setTimeout(() => {
          this.showSuccessMsg = false;
        }, 5000);
      }
    );
  }
}
