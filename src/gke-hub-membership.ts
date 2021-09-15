// https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels to apply to this membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#labels GkeHubMembership#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The client-provided identifier of the membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#membership_id GkeHubMembership#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#project GkeHubMembership#project}
  */
  readonly project?: string;
  /**
  * authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#authority GkeHubMembership#authority}
  */
  readonly authority?: GkeHubMembershipAuthority[];
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#endpoint GkeHubMembership#endpoint}
  */
  readonly endpoint?: GkeHubMembershipEndpoint[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#timeouts GkeHubMembership#timeouts}
  */
  readonly timeouts?: GkeHubMembershipTimeouts;
}
export interface GkeHubMembershipAuthority {
  /**
  * A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://' and // be a valid 
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster' (must be 'locations' rather than 'zones'). If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#issuer GkeHubMembership#issuer}
  */
  readonly issuer: string;
}

function gkeHubMembershipAuthorityToTerraform(struct?: GkeHubMembershipAuthority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export interface GkeHubMembershipEndpointGkeCluster {
  /**
  * Self-link of the GCP resource for the GKE cluster.
For example: '//container.googleapis.com/projects/my-project/zones/us-west1-a/clusters/my-cluster'.
It can be at the most 1000 characters in length. If the cluster is provisioned with Terraform,
this can be '"//container.googleapis.com/${google_container_cluster.my-cluster.id}"' or
'google_container_cluster.my-cluster.id'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#resource_link GkeHubMembership#resource_link}
  */
  readonly resourceLink: string;
}

function gkeHubMembershipEndpointGkeClusterToTerraform(struct?: GkeHubMembershipEndpointGkeCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_link: cdktf.stringToTerraform(struct!.resourceLink),
  }
}

export interface GkeHubMembershipEndpoint {
  /**
  * gke_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#gke_cluster GkeHubMembership#gke_cluster}
  */
  readonly gkeCluster?: GkeHubMembershipEndpointGkeCluster[];
}

function gkeHubMembershipEndpointToTerraform(struct?: GkeHubMembershipEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gke_cluster: cdktf.listMapper(gkeHubMembershipEndpointGkeClusterToTerraform)(struct!.gkeCluster),
  }
}

export interface GkeHubMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#create GkeHubMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#delete GkeHubMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#update GkeHubMembership#update}
  */
  readonly update?: string;
}

function gkeHubMembershipTimeoutsToTerraform(struct?: GkeHubMembershipTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html google_gke_hub_membership}
*/
export class GkeHubMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_gke_hub_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html google_gke_hub_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_membership',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._membershipId = config.membershipId;
    this._project = config.project;
    this._authority = config.authority;
    this._endpoint = config.endpoint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // membership_id - computed: false, optional: false, required: true
  private _membershipId: string;
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // authority - computed: false, optional: true, required: false
  private _authority?: GkeHubMembershipAuthority[];
  public get authority() {
    return this.interpolationForAttribute('authority') as any;
  }
  public set authority(value: GkeHubMembershipAuthority[] ) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: GkeHubMembershipEndpoint[];
  public get endpoint() {
    return this.interpolationForAttribute('endpoint') as any;
  }
  public set endpoint(value: GkeHubMembershipEndpoint[] ) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GkeHubMembershipTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GkeHubMembershipTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      project: cdktf.stringToTerraform(this._project),
      authority: cdktf.listMapper(gkeHubMembershipAuthorityToTerraform)(this._authority),
      endpoint: cdktf.listMapper(gkeHubMembershipEndpointToTerraform)(this._endpoint),
      timeouts: gkeHubMembershipTimeoutsToTerraform(this._timeouts),
    };
  }
}
