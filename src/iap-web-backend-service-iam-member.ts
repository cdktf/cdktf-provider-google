// https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IapWebBackendServiceIamMemberConfig extends TerraformMetaArguments {
  readonly member: string;
  readonly project?: string;
  readonly role: string;
  readonly webBackendService: string;
  /** condition block */
  readonly condition?: IapWebBackendServiceIamMemberCondition[];
}
export interface IapWebBackendServiceIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class IapWebBackendServiceIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this._member;
  }
  public set member(value: string) {
    this._member = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // web_backend_service - computed: false, optional: false, required: true
  private _webBackendService: string;
  public get webBackendService() {
    return this._webBackendService;
  }
  public set webBackendService(value: string) {
    this._webBackendService = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: IapWebBackendServiceIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: IapWebBackendServiceIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      member: this._member,
      project: this._project,
      role: this._role,
      web_backend_service: this._webBackendService,
      condition: this._condition,
    };
  }
}
