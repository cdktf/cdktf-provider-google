// https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IapAppEngineVersionIamMemberConfig extends TerraformMetaArguments {
  readonly appId: string;
  readonly member: string;
  readonly project?: string;
  readonly role: string;
  readonly service: string;
  readonly versionId: string;
  /** condition block */
  readonly condition?: IapAppEngineVersionIamMemberCondition[];
}
export interface IapAppEngineVersionIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class IapAppEngineVersionIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IapAppEngineVersionIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_app_engine_version_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appId = config.appId;
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._service = config.service;
    this._versionId = config.versionId;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId: string;
  public get appId() {
    return this._appId;
  }
  public set appId(value: string) {
    this._appId = value;
  }

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

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId: string;
  public get versionId() {
    return this._versionId;
  }
  public set versionId(value: string) {
    this._versionId = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: IapAppEngineVersionIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: IapAppEngineVersionIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: this._appId,
      member: this._member,
      project: this._project,
      role: this._role,
      service: this._service,
      version_id: this._versionId,
      condition: this._condition,
    };
  }
}
