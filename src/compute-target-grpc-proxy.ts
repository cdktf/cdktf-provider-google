// https://www.terraform.io/docs/providers/google/r/compute_target_grpc_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeTargetGrpcProxyConfig extends cdktf.TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** URL to the UrlMap resource that defines the mapping from URL to
the BackendService. The protocol field in the BackendService
must be set to GRPC. */
  readonly urlMap?: string;
  /** If true, indicates that the BackendServices referenced by
the urlMap may be accessed by gRPC applications without using
a sidecar proxy. This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to */
  readonly validateForProxyless?: boolean;
  /** timeouts block */
  readonly timeouts?: ComputeTargetGrpcProxyTimeouts;
}
export interface ComputeTargetGrpcProxyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeTargetGrpcProxyTimeoutsToTerraform(struct?: ComputeTargetGrpcProxyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeTargetGrpcProxy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeTargetGrpcProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_grpc_proxy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._urlMap = config.urlMap;
    this._validateForProxyless = config.validateForProxyless;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // url_map - computed: false, optional: true, required: false
  private _urlMap?: string;
  public get urlMap() {
    return this.getStringAttribute('url_map');
  }
  public set urlMap(value: string ) {
    this._urlMap = value;
  }
  public resetUrlMap() {
    this._urlMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMapInput() {
    return this._urlMap
  }

  // validate_for_proxyless - computed: false, optional: true, required: false
  private _validateForProxyless?: boolean;
  public get validateForProxyless() {
    return this.getBooleanAttribute('validate_for_proxyless');
  }
  public set validateForProxyless(value: boolean ) {
    this._validateForProxyless = value;
  }
  public resetValidateForProxyless() {
    this._validateForProxyless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateForProxylessInput() {
    return this._validateForProxyless
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeTargetGrpcProxyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeTargetGrpcProxyTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      url_map: cdktf.stringToTerraform(this._urlMap),
      validate_for_proxyless: cdktf.booleanToTerraform(this._validateForProxyless),
      timeouts: computeTargetGrpcProxyTimeoutsToTerraform(this._timeouts),
    };
  }
}
