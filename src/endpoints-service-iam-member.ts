// https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointsServiceIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#member EndpointsServiceIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#role EndpointsServiceIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#service_name EndpointsServiceIamMember#service_name}
  */
  readonly serviceName: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#condition EndpointsServiceIamMember#condition}
  */
  readonly condition?: EndpointsServiceIamMemberCondition[];
}
export interface EndpointsServiceIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#description EndpointsServiceIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#expression EndpointsServiceIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html#title EndpointsServiceIamMember#title}
  */
  readonly title: string;
}

function endpointsServiceIamMemberConditionToTerraform(struct?: EndpointsServiceIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html google_endpoints_service_iam_member}
*/
export class EndpointsServiceIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_endpoints_service_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_member.html google_endpoints_service_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointsServiceIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointsServiceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_endpoints_service_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
    this._role = config.role;
    this._serviceName = config.serviceName;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: EndpointsServiceIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: EndpointsServiceIamMemberCondition[] ) {
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
      role: cdktf.stringToTerraform(this._role),
      service_name: cdktf.stringToTerraform(this._serviceName),
      condition: cdktf.listMapper(endpointsServiceIamMemberConditionToTerraform)(this._condition),
    };
  }
}
