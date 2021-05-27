// https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapWebBackendServiceIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#members IapWebBackendServiceIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#project IapWebBackendServiceIamBinding#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#role IapWebBackendServiceIamBinding#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#web_backend_service IapWebBackendServiceIamBinding#web_backend_service}
  */
  readonly webBackendService: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#condition IapWebBackendServiceIamBinding#condition}
  */
  readonly condition?: IapWebBackendServiceIamBindingCondition[];
}
export interface IapWebBackendServiceIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#description IapWebBackendServiceIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#expression IapWebBackendServiceIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html#title IapWebBackendServiceIamBinding#title}
  */
  readonly title: string;
}

function iapWebBackendServiceIamBindingConditionToTerraform(struct?: IapWebBackendServiceIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html google_iap_web_backend_service_iam_binding}
*/
export class IapWebBackendServiceIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_binding.html google_iap_web_backend_service_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapWebBackendServiceIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: IapWebBackendServiceIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_backend_service_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._webBackendService = config.webBackendService;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // web_backend_service - computed: false, optional: false, required: true
  private _webBackendService: string;
  public get webBackendService() {
    return this.getStringAttribute('web_backend_service');
  }
  public set webBackendService(value: string) {
    this._webBackendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webBackendServiceInput() {
    return this._webBackendService
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: IapWebBackendServiceIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: IapWebBackendServiceIamBindingCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      web_backend_service: cdktf.stringToTerraform(this._webBackendService),
      condition: cdktf.listMapper(iapWebBackendServiceIamBindingConditionToTerraform)(this._condition),
    };
  }
}
