// https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapWebBackendServiceIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#member IapWebBackendServiceIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#project IapWebBackendServiceIamMember#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#role IapWebBackendServiceIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#web_backend_service IapWebBackendServiceIamMember#web_backend_service}
  */
  readonly webBackendService: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#condition IapWebBackendServiceIamMember#condition}
  */
  readonly condition?: IapWebBackendServiceIamMemberCondition[];
}
export interface IapWebBackendServiceIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#description IapWebBackendServiceIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#expression IapWebBackendServiceIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html#title IapWebBackendServiceIamMember#title}
  */
  readonly title: string;
}

function iapWebBackendServiceIamMemberConditionToTerraform(struct?: IapWebBackendServiceIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html google_iap_web_backend_service_iam_member}
*/
export class IapWebBackendServiceIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html google_iap_web_backend_service_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapWebBackendServiceIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: IapWebBackendServiceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_backend_service_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
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

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
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
  private _condition?: IapWebBackendServiceIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: IapWebBackendServiceIamMemberCondition[] ) {
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
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      web_backend_service: cdktf.stringToTerraform(this._webBackendService),
      condition: cdktf.listMapper(iapWebBackendServiceIamMemberConditionToTerraform)(this._condition),
    };
  }
}
