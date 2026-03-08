terraform {
  backend "s3" {
    bucket         = "brithivi-terraform-remote-state"
    key            = "ecs/dev/terraform.tfstate"
    region         = "ap-southeast-1"
    dynamodb_table = "terraform-lock-table"
    encrypt        = true
  }
}