# `google_gkeonprem_vmware_cluster`

Refer to the Terraform Registory for docs: [`google_gkeonprem_vmware_cluster`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster).

# `gkeonpremVmwareCluster` Submodule <a name="`gkeonpremVmwareCluster` Submodule" id="@cdktf/provider-google.gkeonpremVmwareCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareCluster <a name="GkeonpremVmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareCluster;

GkeonpremVmwareCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminClusterMembership(java.lang.String)
    .controlPlaneNode(GkeonpremVmwareClusterControlPlaneNode)
    .location(java.lang.String)
    .name(java.lang.String)
    .onPremVersion(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .antiAffinityGroups(GkeonpremVmwareClusterAntiAffinityGroups)
//  .authorization(GkeonpremVmwareClusterAuthorization)
//  .autoRepairConfig(GkeonpremVmwareClusterAutoRepairConfig)
//  .dataplaneV2(GkeonpremVmwareClusterDataplaneV2)
//  .description(java.lang.String)
//  .enableControlPlaneV2(java.lang.Boolean)
//  .enableControlPlaneV2(IResolvable)
//  .id(java.lang.String)
//  .loadBalancer(GkeonpremVmwareClusterLoadBalancer)
//  .networkConfig(GkeonpremVmwareClusterNetworkConfig)
//  .project(java.lang.String)
//  .storage(GkeonpremVmwareClusterStorage)
//  .timeouts(GkeonpremVmwareClusterTimeouts)
//  .upgradePolicy(GkeonpremVmwareClusterUpgradePolicy)
//  .vcenter(GkeonpremVmwareClusterVcenter)
//  .vmTrackingEnabled(java.lang.Boolean)
//  .vmTrackingEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.adminClusterMembership">adminClusterMembership</a></code> | <code>java.lang.String</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#id GkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#project GkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable VM tracking. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.adminClusterMembership"></a>

- *Type:* java.lang.String

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#admin_cluster_membership GkeonpremVmwareCluster#admin_cluster_membership}

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.controlPlaneNode"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_node GkeonpremVmwareCluster#control_plane_node}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#location GkeonpremVmwareCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#name GkeonpremVmwareCluster#name}

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.onPremVersion"></a>

- *Type:* java.lang.String

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#on_prem_version GkeonpremVmwareCluster#on_prem_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#annotations GkeonpremVmwareCluster#annotations}

---

##### `antiAffinityGroups`<sup>Optional</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.antiAffinityGroups"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#anti_affinity_groups GkeonpremVmwareCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#authorization GkeonpremVmwareCluster#authorization}

---

##### `autoRepairConfig`<sup>Optional</sup> <a name="autoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.autoRepairConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#auto_repair_config GkeonpremVmwareCluster#auto_repair_config}

---

##### `dataplaneV2`<sup>Optional</sup> <a name="dataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.dataplaneV2"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#dataplane_v2 GkeonpremVmwareCluster#dataplane_v2}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#description GkeonpremVmwareCluster#description}

---

##### `enableControlPlaneV2`<sup>Optional</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.enableControlPlaneV2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#enable_control_plane_v2 GkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#id GkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.loadBalancer"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#load_balancer GkeonpremVmwareCluster#load_balancer}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#network_config GkeonpremVmwareCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#project GkeonpremVmwareCluster#project}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#storage GkeonpremVmwareCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#timeouts GkeonpremVmwareCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.upgradePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#upgrade_policy GkeonpremVmwareCluster#upgrade_policy}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.vcenter"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#vcenter GkeonpremVmwareCluster#vcenter}

---

##### `vmTrackingEnabled`<sup>Optional</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.Initializer.parameter.vmTrackingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#vm_tracking_enabled GkeonpremVmwareCluster#vm_tracking_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAntiAffinityGroups">putAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAutoRepairConfig">putAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putControlPlaneNode">putControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putDataplaneV2">putDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putVcenter">putVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAntiAffinityGroups">resetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAutoRepairConfig">resetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDataplaneV2">resetDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetEnableControlPlaneV2">resetEnableControlPlaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVcenter">resetVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVmTrackingEnabled">resetVmTrackingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAntiAffinityGroups` <a name="putAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAntiAffinityGroups"></a>

```java
public void putAntiAffinityGroups(GkeonpremVmwareClusterAntiAffinityGroups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAuthorization"></a>

```java
public void putAuthorization(GkeonpremVmwareClusterAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

---

##### `putAutoRepairConfig` <a name="putAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAutoRepairConfig"></a>

```java
public void putAutoRepairConfig(GkeonpremVmwareClusterAutoRepairConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `putControlPlaneNode` <a name="putControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putControlPlaneNode"></a>

```java
public void putControlPlaneNode(GkeonpremVmwareClusterControlPlaneNode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

---

##### `putDataplaneV2` <a name="putDataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putDataplaneV2"></a>

```java
public void putDataplaneV2(GkeonpremVmwareClusterDataplaneV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putDataplaneV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putLoadBalancer"></a>

```java
public void putLoadBalancer(GkeonpremVmwareClusterLoadBalancer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putNetworkConfig"></a>

```java
public void putNetworkConfig(GkeonpremVmwareClusterNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putStorage"></a>

```java
public void putStorage(GkeonpremVmwareClusterStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putTimeouts"></a>

```java
public void putTimeouts(GkeonpremVmwareClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putUpgradePolicy"></a>

```java
public void putUpgradePolicy(GkeonpremVmwareClusterUpgradePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

---

##### `putVcenter` <a name="putVcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putVcenter"></a>

```java
public void putVcenter(GkeonpremVmwareClusterVcenter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAntiAffinityGroups` <a name="resetAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAntiAffinityGroups"></a>

```java
public void resetAntiAffinityGroups()
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetAutoRepairConfig` <a name="resetAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetAutoRepairConfig"></a>

```java
public void resetAutoRepairConfig()
```

##### `resetDataplaneV2` <a name="resetDataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDataplaneV2"></a>

```java
public void resetDataplaneV2()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableControlPlaneV2` <a name="resetEnableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetEnableControlPlaneV2"></a>

```java
public void resetEnableControlPlaneV2()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetUpgradePolicy"></a>

```java
public void resetUpgradePolicy()
```

##### `resetVcenter` <a name="resetVcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVcenter"></a>

```java
public void resetVcenter()
```

##### `resetVmTrackingEnabled` <a name="resetVmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.resetVmTrackingEnabled"></a>

```java
public void resetVmTrackingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareCluster;

GkeonpremVmwareCluster.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareCluster;

GkeonpremVmwareCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareCluster;

GkeonpremVmwareCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareCluster;

GkeonpremVmwareCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeonpremVmwareCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeonpremVmwareCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeonpremVmwareCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference">GkeonpremVmwareClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference">GkeonpremVmwareClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference">GkeonpremVmwareClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference">GkeonpremVmwareClusterDataplaneV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList">GkeonpremVmwareClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference">GkeonpremVmwareClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference">GkeonpremVmwareClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList">GkeonpremVmwareClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference">GkeonpremVmwareClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference">GkeonpremVmwareClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference">GkeonpremVmwareClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.validationCheck">validationCheck</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList">GkeonpremVmwareClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference">GkeonpremVmwareClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembershipInput">adminClusterMembershipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroupsInput">antiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfigInput">autoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNodeInput">controlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2Input">dataplaneV2Input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2Input">enableControlPlaneV2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersionInput">onPremVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenterInput">vcenterInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabledInput">vmTrackingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembership">adminClusterMembership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `antiAffinityGroups`<sup>Required</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroups"></a>

```java
public GkeonpremVmwareClusterAntiAffinityGroupsOutputReference getAntiAffinityGroups();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorization"></a>

```java
public GkeonpremVmwareClusterAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference">GkeonpremVmwareClusterAuthorizationOutputReference</a>

---

##### `autoRepairConfig`<sup>Required</sup> <a name="autoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfig"></a>

```java
public GkeonpremVmwareClusterAutoRepairConfigOutputReference getAutoRepairConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference">GkeonpremVmwareClusterAutoRepairConfigOutputReference</a>

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNode"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeOutputReference getControlPlaneNode();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference">GkeonpremVmwareClusterControlPlaneNodeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataplaneV2`<sup>Required</sup> <a name="dataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2"></a>

```java
public GkeonpremVmwareClusterDataplaneV2OutputReference getDataplaneV2();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference">GkeonpremVmwareClusterDataplaneV2OutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.fleet"></a>

```java
public GkeonpremVmwareClusterFleetList getFleet();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList">GkeonpremVmwareClusterFleetList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancer"></a>

```java
public GkeonpremVmwareClusterLoadBalancerOutputReference getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference">GkeonpremVmwareClusterLoadBalancerOutputReference</a>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference">GkeonpremVmwareClusterNetworkConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.status"></a>

```java
public GkeonpremVmwareClusterStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList">GkeonpremVmwareClusterStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storage"></a>

```java
public GkeonpremVmwareClusterStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference">GkeonpremVmwareClusterStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeouts"></a>

```java
public GkeonpremVmwareClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference">GkeonpremVmwareClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicy"></a>

```java
public GkeonpremVmwareClusterUpgradePolicyOutputReference getUpgradePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference">GkeonpremVmwareClusterUpgradePolicyOutputReference</a>

---

##### `validationCheck`<sup>Required</sup> <a name="validationCheck" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.validationCheck"></a>

```java
public GkeonpremVmwareClusterValidationCheckList getValidationCheck();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList">GkeonpremVmwareClusterValidationCheckList</a>

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenter"></a>

```java
public GkeonpremVmwareClusterVcenterOutputReference getVcenter();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference">GkeonpremVmwareClusterVcenterOutputReference</a>

---

##### `adminClusterMembershipInput`<sup>Optional</sup> <a name="adminClusterMembershipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembershipInput"></a>

```java
public java.lang.String getAdminClusterMembershipInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `antiAffinityGroupsInput`<sup>Optional</sup> <a name="antiAffinityGroupsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.antiAffinityGroupsInput"></a>

```java
public GkeonpremVmwareClusterAntiAffinityGroups getAntiAffinityGroupsInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.authorizationInput"></a>

```java
public GkeonpremVmwareClusterAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

---

##### `autoRepairConfigInput`<sup>Optional</sup> <a name="autoRepairConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.autoRepairConfigInput"></a>

```java
public GkeonpremVmwareClusterAutoRepairConfig getAutoRepairConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `controlPlaneNodeInput`<sup>Optional</sup> <a name="controlPlaneNodeInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.controlPlaneNodeInput"></a>

```java
public GkeonpremVmwareClusterControlPlaneNode getControlPlaneNodeInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

---

##### `dataplaneV2Input`<sup>Optional</sup> <a name="dataplaneV2Input" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.dataplaneV2Input"></a>

```java
public GkeonpremVmwareClusterDataplaneV2 getDataplaneV2Input();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableControlPlaneV2Input`<sup>Optional</sup> <a name="enableControlPlaneV2Input" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2Input"></a>

```java
public java.lang.Object getEnableControlPlaneV2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.loadBalancerInput"></a>

```java
public GkeonpremVmwareClusterLoadBalancer getLoadBalancerInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.networkConfigInput"></a>

```java
public GkeonpremVmwareClusterNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

---

##### `onPremVersionInput`<sup>Optional</sup> <a name="onPremVersionInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersionInput"></a>

```java
public java.lang.String getOnPremVersionInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.storageInput"></a>

```java
public GkeonpremVmwareClusterStorage getStorageInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.upgradePolicyInput"></a>

```java
public GkeonpremVmwareClusterUpgradePolicy getUpgradePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

---

##### `vcenterInput`<sup>Optional</sup> <a name="vcenterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vcenterInput"></a>

```java
public GkeonpremVmwareClusterVcenter getVcenterInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

---

##### `vmTrackingEnabledInput`<sup>Optional</sup> <a name="vmTrackingEnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabledInput"></a>

```java
public java.lang.Object getVmTrackingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.adminClusterMembership"></a>

```java
public java.lang.String getAdminClusterMembership();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableControlPlaneV2`<sup>Required</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.enableControlPlaneV2"></a>

```java
public java.lang.Object getEnableControlPlaneV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.onPremVersion"></a>

```java
public java.lang.String getOnPremVersion();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `vmTrackingEnabled`<sup>Required</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.vmTrackingEnabled"></a>

```java
public java.lang.Object getVmTrackingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareClusterAntiAffinityGroups <a name="GkeonpremVmwareClusterAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAntiAffinityGroups;

GkeonpremVmwareClusterAntiAffinityGroups.builder()
    .aagConfigDisabled(java.lang.Boolean)
    .aagConfigDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```java
public java.lang.Object getAagConfigDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#aag_config_disabled GkeonpremVmwareCluster#aag_config_disabled}

---

### GkeonpremVmwareClusterAuthorization <a name="GkeonpremVmwareClusterAuthorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAuthorization;

GkeonpremVmwareClusterAuthorization.builder()
//  .adminUsers(IResolvable)
//  .adminUsers(java.util.List<GkeonpremVmwareClusterAuthorizationAdminUsers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>></code> | admin_users block. |

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization.property.adminUsers"></a>

```java
public java.lang.Object getAdminUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#admin_users GkeonpremVmwareCluster#admin_users}

---

### GkeonpremVmwareClusterAuthorizationAdminUsers <a name="GkeonpremVmwareClusterAuthorizationAdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAuthorizationAdminUsers;

GkeonpremVmwareClusterAuthorizationAdminUsers.builder()
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>java.lang.String</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#username GkeonpremVmwareCluster#username}

---

### GkeonpremVmwareClusterAutoRepairConfig <a name="GkeonpremVmwareClusterAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAutoRepairConfig;

GkeonpremVmwareClusterAutoRepairConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether auto repair is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#enabled GkeonpremVmwareCluster#enabled}

---

### GkeonpremVmwareClusterConfig <a name="GkeonpremVmwareClusterConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterConfig;

GkeonpremVmwareClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminClusterMembership(java.lang.String)
    .controlPlaneNode(GkeonpremVmwareClusterControlPlaneNode)
    .location(java.lang.String)
    .name(java.lang.String)
    .onPremVersion(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .antiAffinityGroups(GkeonpremVmwareClusterAntiAffinityGroups)
//  .authorization(GkeonpremVmwareClusterAuthorization)
//  .autoRepairConfig(GkeonpremVmwareClusterAutoRepairConfig)
//  .dataplaneV2(GkeonpremVmwareClusterDataplaneV2)
//  .description(java.lang.String)
//  .enableControlPlaneV2(java.lang.Boolean)
//  .enableControlPlaneV2(IResolvable)
//  .id(java.lang.String)
//  .loadBalancer(GkeonpremVmwareClusterLoadBalancer)
//  .networkConfig(GkeonpremVmwareClusterNetworkConfig)
//  .project(java.lang.String)
//  .storage(GkeonpremVmwareClusterStorage)
//  .timeouts(GkeonpremVmwareClusterTimeouts)
//  .upgradePolicy(GkeonpremVmwareClusterUpgradePolicy)
//  .vcenter(GkeonpremVmwareClusterVcenter)
//  .vmTrackingEnabled(java.lang.Boolean)
//  .vmTrackingEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.adminClusterMembership">adminClusterMembership</a></code> | <code>java.lang.String</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.onPremVersion">onPremVersion</a></code> | <code>java.lang.String</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#id GkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#project GkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable VM tracking. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.adminClusterMembership"></a>

```java
public java.lang.String getAdminClusterMembership();
```

- *Type:* java.lang.String

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#admin_cluster_membership GkeonpremVmwareCluster#admin_cluster_membership}

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.controlPlaneNode"></a>

```java
public GkeonpremVmwareClusterControlPlaneNode getControlPlaneNode();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_node GkeonpremVmwareCluster#control_plane_node}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#location GkeonpremVmwareCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#name GkeonpremVmwareCluster#name}

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.onPremVersion"></a>

```java
public java.lang.String getOnPremVersion();
```

- *Type:* java.lang.String

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#on_prem_version GkeonpremVmwareCluster#on_prem_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#annotations GkeonpremVmwareCluster#annotations}

---

##### `antiAffinityGroups`<sup>Optional</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.antiAffinityGroups"></a>

```java
public GkeonpremVmwareClusterAntiAffinityGroups getAntiAffinityGroups();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#anti_affinity_groups GkeonpremVmwareCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.authorization"></a>

```java
public GkeonpremVmwareClusterAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#authorization GkeonpremVmwareCluster#authorization}

---

##### `autoRepairConfig`<sup>Optional</sup> <a name="autoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.autoRepairConfig"></a>

```java
public GkeonpremVmwareClusterAutoRepairConfig getAutoRepairConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#auto_repair_config GkeonpremVmwareCluster#auto_repair_config}

---

##### `dataplaneV2`<sup>Optional</sup> <a name="dataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.dataplaneV2"></a>

```java
public GkeonpremVmwareClusterDataplaneV2 getDataplaneV2();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#dataplane_v2 GkeonpremVmwareCluster#dataplane_v2}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#description GkeonpremVmwareCluster#description}

---

##### `enableControlPlaneV2`<sup>Optional</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.enableControlPlaneV2"></a>

```java
public java.lang.Object getEnableControlPlaneV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#enable_control_plane_v2 GkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#id GkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.loadBalancer"></a>

```java
public GkeonpremVmwareClusterLoadBalancer getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#load_balancer GkeonpremVmwareCluster#load_balancer}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.networkConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#network_config GkeonpremVmwareCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#project GkeonpremVmwareCluster#project}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.storage"></a>

```java
public GkeonpremVmwareClusterStorage getStorage();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#storage GkeonpremVmwareCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.timeouts"></a>

```java
public GkeonpremVmwareClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#timeouts GkeonpremVmwareCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.upgradePolicy"></a>

```java
public GkeonpremVmwareClusterUpgradePolicy getUpgradePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#upgrade_policy GkeonpremVmwareCluster#upgrade_policy}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vcenter"></a>

```java
public GkeonpremVmwareClusterVcenter getVcenter();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#vcenter GkeonpremVmwareCluster#vcenter}

---

##### `vmTrackingEnabled`<sup>Optional</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterConfig.property.vmTrackingEnabled"></a>

```java
public java.lang.Object getVmTrackingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#vm_tracking_enabled GkeonpremVmwareCluster#vm_tracking_enabled}

---

### GkeonpremVmwareClusterControlPlaneNode <a name="GkeonpremVmwareClusterControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNode;

GkeonpremVmwareClusterControlPlaneNode.builder()
//  .autoResizeConfig(GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig)
//  .cpus(java.lang.Number)
//  .memory(java.lang.Number)
//  .replicas(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | auto_resize_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.cpus">cpus</a></code> | <code>java.lang.Number</code> | The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.memory">memory</a></code> | <code>java.lang.Number</code> | The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | The number of control plane nodes for this VMware User Cluster. (default: 1 replica). |

---

##### `autoResizeConfig`<sup>Optional</sup> <a name="autoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig getAutoResizeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#auto_resize_config GkeonpremVmwareCluster#auto_resize_config}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.cpus"></a>

```java
public java.lang.Number getCpus();
```

- *Type:* java.lang.Number

The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster.

(default: 4 CPUs)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#cpus GkeonpremVmwareCluster#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#memory GkeonpremVmwareCluster#memory}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

The number of control plane nodes for this VMware User Cluster. (default: 1 replica).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#replicas GkeonpremVmwareCluster#replicas}

---

### GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig <a name="GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig;

GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable control plane node auto resizing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable control plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#enabled GkeonpremVmwareCluster#enabled}

---

### GkeonpremVmwareClusterControlPlaneNodeVsphereConfig <a name="GkeonpremVmwareClusterControlPlaneNodeVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig;

GkeonpremVmwareClusterControlPlaneNodeVsphereConfig.builder()
    .build();
```


### GkeonpremVmwareClusterDataplaneV2 <a name="GkeonpremVmwareClusterDataplaneV2" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterDataplaneV2;

GkeonpremVmwareClusterDataplaneV2.builder()
//  .advancedNetworking(java.lang.Boolean)
//  .advancedNetworking(IResolvable)
//  .dataplaneV2Enabled(java.lang.Boolean)
//  .dataplaneV2Enabled(IResolvable)
//  .windowsDataplaneV2Enabled(java.lang.Boolean)
//  .windowsDataplaneV2Enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.advancedNetworking">advancedNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable advanced networking which requires dataplane_v2_enabled to be set true. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled">dataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables Dataplane V2. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled">windowsDataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Dataplane V2 for clusters with Windows nodes. |

---

##### `advancedNetworking`<sup>Optional</sup> <a name="advancedNetworking" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.advancedNetworking"></a>

```java
public java.lang.Object getAdvancedNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable advanced networking which requires dataplane_v2_enabled to be set true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#advanced_networking GkeonpremVmwareCluster#advanced_networking}

---

##### `dataplaneV2Enabled`<sup>Optional</sup> <a name="dataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled"></a>

```java
public java.lang.Object getDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables Dataplane V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#dataplane_v2_enabled GkeonpremVmwareCluster#dataplane_v2_enabled}

---

##### `windowsDataplaneV2Enabled`<sup>Optional</sup> <a name="windowsDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled"></a>

```java
public java.lang.Object getWindowsDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Dataplane V2 for clusters with Windows nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#windows_dataplane_v2_enabled GkeonpremVmwareCluster#windows_dataplane_v2_enabled}

---

### GkeonpremVmwareClusterFleet <a name="GkeonpremVmwareClusterFleet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterFleet;

GkeonpremVmwareClusterFleet.builder()
    .build();
```


### GkeonpremVmwareClusterLoadBalancer <a name="GkeonpremVmwareClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancer;

GkeonpremVmwareClusterLoadBalancer.builder()
//  .f5Config(GkeonpremVmwareClusterLoadBalancerF5Config)
//  .manualLbConfig(GkeonpremVmwareClusterLoadBalancerManualLbConfig)
//  .metalLbConfig(GkeonpremVmwareClusterLoadBalancerMetalLbConfig)
//  .vipConfig(GkeonpremVmwareClusterLoadBalancerVipConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | vip_config block. |

---

##### `f5Config`<sup>Optional</sup> <a name="f5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.f5Config"></a>

```java
public GkeonpremVmwareClusterLoadBalancerF5Config getF5Config();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#f5_config GkeonpremVmwareCluster#f5_config}

---

##### `manualLbConfig`<sup>Optional</sup> <a name="manualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.manualLbConfig"></a>

```java
public GkeonpremVmwareClusterLoadBalancerManualLbConfig getManualLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#manual_lb_config GkeonpremVmwareCluster#manual_lb_config}

---

##### `metalLbConfig`<sup>Optional</sup> <a name="metalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.metalLbConfig"></a>

```java
public GkeonpremVmwareClusterLoadBalancerMetalLbConfig getMetalLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#metal_lb_config GkeonpremVmwareCluster#metal_lb_config}

---

##### `vipConfig`<sup>Optional</sup> <a name="vipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer.property.vipConfig"></a>

```java
public GkeonpremVmwareClusterLoadBalancerVipConfig getVipConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#vip_config GkeonpremVmwareCluster#vip_config}

---

### GkeonpremVmwareClusterLoadBalancerF5Config <a name="GkeonpremVmwareClusterLoadBalancerF5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerF5Config;

GkeonpremVmwareClusterLoadBalancerF5Config.builder()
//  .address(java.lang.String)
//  .partition(java.lang.String)
//  .snatPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.address">address</a></code> | <code>java.lang.String</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.partition">partition</a></code> | <code>java.lang.String</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool">snatPool</a></code> | <code>java.lang.String</code> | The pool name. Only necessary, if using SNAT. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#address GkeonpremVmwareCluster#address}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#partition GkeonpremVmwareCluster#partition}

---

##### `snatPool`<sup>Optional</sup> <a name="snatPool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool"></a>

```java
public java.lang.String getSnatPool();
```

- *Type:* java.lang.String

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#snat_pool GkeonpremVmwareCluster#snat_pool}

---

### GkeonpremVmwareClusterLoadBalancerManualLbConfig <a name="GkeonpremVmwareClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig;

GkeonpremVmwareClusterLoadBalancerManualLbConfig.builder()
//  .controlPlaneNodePort(java.lang.Number)
//  .ingressHttpNodePort(java.lang.Number)
//  .ingressHttpsNodePort(java.lang.Number)
//  .konnectivityServerNodePort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>java.lang.Number</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>java.lang.Number</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>java.lang.Number</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>java.lang.Number</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `controlPlaneNodePort`<sup>Optional</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```java
public java.lang.Number getControlPlaneNodePort();
```

- *Type:* java.lang.Number

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_node_port GkeonpremVmwareCluster#control_plane_node_port}

---

##### `ingressHttpNodePort`<sup>Optional</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```java
public java.lang.Number getIngressHttpNodePort();
```

- *Type:* java.lang.Number

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ingress_http_node_port GkeonpremVmwareCluster#ingress_http_node_port}

---

##### `ingressHttpsNodePort`<sup>Optional</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```java
public java.lang.Number getIngressHttpsNodePort();
```

- *Type:* java.lang.Number

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ingress_https_node_port GkeonpremVmwareCluster#ingress_https_node_port}

---

##### `konnectivityServerNodePort`<sup>Optional</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```java
public java.lang.Number getKonnectivityServerNodePort();
```

- *Type:* java.lang.Number

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#konnectivity_server_node_port GkeonpremVmwareCluster#konnectivity_server_node_port}

---

### GkeonpremVmwareClusterLoadBalancerMetalLbConfig <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig;

GkeonpremVmwareClusterLoadBalancerMetalLbConfig.builder()
    .addressPools(IResolvable)
    .addressPools(java.util.List<GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools">addressPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>></code> | address_pools block. |

---

##### `addressPools`<sup>Required</sup> <a name="addressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools"></a>

```java
public java.lang.Object getAddressPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

address_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#address_pools GkeonpremVmwareCluster#address_pools}

---

### GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools;

GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.builder()
    .addresses(java.util.List<java.lang.String>)
    .pool(java.lang.String)
//  .avoidBuggyIps(java.lang.Boolean)
//  .avoidBuggyIps(IResolvable)
//  .manualAssign(java.lang.Boolean)
//  .manualAssign(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | The addresses that are part of this pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool">pool</a></code> | <code>java.lang.String</code> | The name of the address pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps">avoidBuggyIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign">manualAssign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, prevent IP addresses from being automatically assigned. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

The addresses that are part of this pool.

Each address
must be either in the CIDR form (1.2.3.0/24) or range
form (1.2.3.1-1.2.3.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#addresses GkeonpremVmwareCluster#addresses}

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

The name of the address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#pool GkeonpremVmwareCluster#pool}

---

##### `avoidBuggyIps`<sup>Optional</sup> <a name="avoidBuggyIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps"></a>

```java
public java.lang.Object getAvoidBuggyIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#avoid_buggy_ips GkeonpremVmwareCluster#avoid_buggy_ips}

---

##### `manualAssign`<sup>Optional</sup> <a name="manualAssign" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign"></a>

```java
public java.lang.Object getManualAssign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, prevent IP addresses from being automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#manual_assign GkeonpremVmwareCluster#manual_assign}

---

### GkeonpremVmwareClusterLoadBalancerVipConfig <a name="GkeonpremVmwareClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerVipConfig;

GkeonpremVmwareClusterLoadBalancerVipConfig.builder()
//  .controlPlaneVip(java.lang.String)
//  .ingressVip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip">controlPlaneVip</a></code> | <code>java.lang.String</code> | The VIP which you previously set aside for the Kubernetes API of this cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip">ingressVip</a></code> | <code>java.lang.String</code> | The VIP which you previously set aside for ingress traffic into this cluster. |

---

##### `controlPlaneVip`<sup>Optional</sup> <a name="controlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```java
public java.lang.String getControlPlaneVip();
```

- *Type:* java.lang.String

The VIP which you previously set aside for the Kubernetes API of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_vip GkeonpremVmwareCluster#control_plane_vip}

---

##### `ingressVip`<sup>Optional</sup> <a name="ingressVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip"></a>

```java
public java.lang.String getIngressVip();
```

- *Type:* java.lang.String

The VIP which you previously set aside for ingress traffic into this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ingress_vip GkeonpremVmwareCluster#ingress_vip}

---

### GkeonpremVmwareClusterNetworkConfig <a name="GkeonpremVmwareClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfig;

GkeonpremVmwareClusterNetworkConfig.builder()
    .podAddressCidrBlocks(java.util.List<java.lang.String>)
    .serviceAddressCidrBlocks(java.util.List<java.lang.String>)
//  .controlPlaneV2Config(GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config)
//  .dhcpIpConfig(GkeonpremVmwareClusterNetworkConfigDhcpIpConfig)
//  .hostConfig(GkeonpremVmwareClusterNetworkConfigHostConfig)
//  .staticIpConfig(GkeonpremVmwareClusterNetworkConfigStaticIpConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config">controlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | control_plane_v2_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#pod_address_cidr_blocks GkeonpremVmwareCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#service_address_cidr_blocks GkeonpremVmwareCluster#service_address_cidr_blocks}

---

##### `controlPlaneV2Config`<sup>Optional</sup> <a name="controlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config getControlPlaneV2Config();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

control_plane_v2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_v2_config GkeonpremVmwareCluster#control_plane_v2_config}

---

##### `dhcpIpConfig`<sup>Optional</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfig getDhcpIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#dhcp_ip_config GkeonpremVmwareCluster#dhcp_ip_config}

---

##### `hostConfig`<sup>Optional</sup> <a name="hostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.hostConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigHostConfig getHostConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#host_config GkeonpremVmwareCluster#host_config}

---

##### `staticIpConfig`<sup>Optional</sup> <a name="staticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig.property.staticIpConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfig getStaticIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#static_ip_config GkeonpremVmwareCluster#static_ip_config}

---

### GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config;

GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.builder()
//  .controlPlaneIpBlock(GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `controlPlaneIpBlock`<sup>Optional</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock getControlPlaneIpBlock();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_ip_block GkeonpremVmwareCluster#control_plane_ip_block}

---

### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;

GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.builder()
//  .gateway(java.lang.String)
//  .ips(IResolvable)
//  .ips(java.util.List<GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps>)
//  .netmask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway">gateway</a></code> | <code>java.lang.String</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips">ips</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>></code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask">netmask</a></code> | <code>java.lang.String</code> | The netmask used by the VMware User Cluster. |

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#gateway GkeonpremVmwareCluster#gateway}

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips"></a>

```java
public java.lang.Object getIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ips GkeonpremVmwareCluster#ips}

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#netmask GkeonpremVmwareCluster#netmask}

---

### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps;

GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.builder()
//  .hostname(java.lang.String)
//  .ip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the machine. VM's name will be used if this field is empty. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip">ip</a></code> | <code>java.lang.String</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#hostname GkeonpremVmwareCluster#hostname}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ip GkeonpremVmwareCluster#ip}

---

### GkeonpremVmwareClusterNetworkConfigDhcpIpConfig <a name="GkeonpremVmwareClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig;

GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#enabled GkeonpremVmwareCluster#enabled}

---

### GkeonpremVmwareClusterNetworkConfigHostConfig <a name="GkeonpremVmwareClusterNetworkConfigHostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigHostConfig;

GkeonpremVmwareClusterNetworkConfigHostConfig.builder()
//  .dnsSearchDomains(java.util.List<java.lang.String>)
//  .dnsServers(java.util.List<java.lang.String>)
//  .ntpServers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>java.util.List<java.lang.String></code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | DNS servers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | NTP servers. |

---

##### `dnsSearchDomains`<sup>Optional</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```java
public java.util.List<java.lang.String> getDnsSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#dns_search_domains GkeonpremVmwareCluster#dns_search_domains}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#dns_servers GkeonpremVmwareCluster#dns_servers}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ntp_servers GkeonpremVmwareCluster#ntp_servers}

---

### GkeonpremVmwareClusterNetworkConfigStaticIpConfig <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig;

GkeonpremVmwareClusterNetworkConfigStaticIpConfig.builder()
    .ipBlocks(IResolvable)
    .ipBlocks(java.util.List<GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks">ipBlocks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>></code> | ip_blocks block. |

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```java
public java.lang.Object getIpBlocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ip_blocks GkeonpremVmwareCluster#ip_blocks}

---

### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks;

GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.builder()
    .gateway(java.lang.String)
    .ips(IResolvable)
    .ips(java.util.List<GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps>)
    .netmask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">gateway</a></code> | <code>java.lang.String</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">ips</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>></code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">netmask</a></code> | <code>java.lang.String</code> | The netmask used by the VMware User Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#gateway GkeonpremVmwareCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```java
public java.lang.Object getIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ips GkeonpremVmwareCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#netmask GkeonpremVmwareCluster#netmask}

---

### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps;

GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.builder()
    .ip(java.lang.String)
//  .hostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">ip</a></code> | <code>java.lang.String</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ip GkeonpremVmwareCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#hostname GkeonpremVmwareCluster#hostname}

---

### GkeonpremVmwareClusterStatus <a name="GkeonpremVmwareClusterStatus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStatus;

GkeonpremVmwareClusterStatus.builder()
    .build();
```


### GkeonpremVmwareClusterStatusConditions <a name="GkeonpremVmwareClusterStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStatusConditions;

GkeonpremVmwareClusterStatusConditions.builder()
    .build();
```


### GkeonpremVmwareClusterStorage <a name="GkeonpremVmwareClusterStorage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStorage;

GkeonpremVmwareClusterStorage.builder()
    .vsphereCsiDisabled(java.lang.Boolean)
    .vsphereCsiDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage.property.vsphereCsiDisabled">vsphereCsiDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default. |

---

##### `vsphereCsiDisabled`<sup>Required</sup> <a name="vsphereCsiDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage.property.vsphereCsiDisabled"></a>

```java
public java.lang.Object getVsphereCsiDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#vsphere_csi_disabled GkeonpremVmwareCluster#vsphere_csi_disabled}

---

### GkeonpremVmwareClusterTimeouts <a name="GkeonpremVmwareClusterTimeouts" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterTimeouts;

GkeonpremVmwareClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#create GkeonpremVmwareCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#delete GkeonpremVmwareCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#update GkeonpremVmwareCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#create GkeonpremVmwareCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#delete GkeonpremVmwareCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#update GkeonpremVmwareCluster#update}.

---

### GkeonpremVmwareClusterUpgradePolicy <a name="GkeonpremVmwareClusterUpgradePolicy" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterUpgradePolicy;

GkeonpremVmwareClusterUpgradePolicy.builder()
//  .controlPlaneOnly(java.lang.Boolean)
//  .controlPlaneOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly">controlPlaneOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether the upgrade applies to the control plane only. |

---

##### `controlPlaneOnly`<sup>Optional</sup> <a name="controlPlaneOnly" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly"></a>

```java
public java.lang.Object getControlPlaneOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether the upgrade applies to the control plane only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#control_plane_only GkeonpremVmwareCluster#control_plane_only}

---

### GkeonpremVmwareClusterValidationCheck <a name="GkeonpremVmwareClusterValidationCheck" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheck;

GkeonpremVmwareClusterValidationCheck.builder()
    .build();
```


### GkeonpremVmwareClusterValidationCheckStatus <a name="GkeonpremVmwareClusterValidationCheckStatus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckStatus;

GkeonpremVmwareClusterValidationCheckStatus.builder()
    .build();
```


### GkeonpremVmwareClusterValidationCheckStatusResult <a name="GkeonpremVmwareClusterValidationCheckStatusResult" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckStatusResult;

GkeonpremVmwareClusterValidationCheckStatusResult.builder()
    .build();
```


### GkeonpremVmwareClusterVcenter <a name="GkeonpremVmwareClusterVcenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterVcenter;

GkeonpremVmwareClusterVcenter.builder()
//  .caCertData(java.lang.String)
//  .cluster(java.lang.String)
//  .datacenter(java.lang.String)
//  .datastore(java.lang.String)
//  .folder(java.lang.String)
//  .resourcePool(java.lang.String)
//  .storagePolicyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.caCertData">caCertData</a></code> | <code>java.lang.String</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The name of the vCenter cluster for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The name of the vCenter datacenter for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datastore">datastore</a></code> | <code>java.lang.String</code> | The name of the vCenter datastore for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.folder">folder</a></code> | <code>java.lang.String</code> | The name of the vCenter folder for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.resourcePool">resourcePool</a></code> | <code>java.lang.String</code> | The name of the vCenter resource pool for the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.storagePolicyName">storagePolicyName</a></code> | <code>java.lang.String</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `caCertData`<sup>Optional</sup> <a name="caCertData" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.caCertData"></a>

```java
public java.lang.String getCaCertData();
```

- *Type:* java.lang.String

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#ca_cert_data GkeonpremVmwareCluster#ca_cert_data}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The name of the vCenter cluster for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#cluster GkeonpremVmwareCluster#cluster}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

The name of the vCenter datacenter for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#datacenter GkeonpremVmwareCluster#datacenter}

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

The name of the vCenter datastore for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#datastore GkeonpremVmwareCluster#datastore}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The name of the vCenter folder for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#folder GkeonpremVmwareCluster#folder}

---

##### `resourcePool`<sup>Optional</sup> <a name="resourcePool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.resourcePool"></a>

```java
public java.lang.String getResourcePool();
```

- *Type:* java.lang.String

The name of the vCenter resource pool for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#resource_pool GkeonpremVmwareCluster#resource_pool}

---

##### `storagePolicyName`<sup>Optional</sup> <a name="storagePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter.property.storagePolicyName"></a>

```java
public java.lang.String getStoragePolicyName();
```

- *Type:* java.lang.String

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gkeonprem_vmware_cluster#storage_policy_name GkeonpremVmwareCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareClusterAntiAffinityGroupsOutputReference <a name="GkeonpremVmwareClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference;

new GkeonpremVmwareClusterAntiAffinityGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">aagConfigDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aagConfigDisabledInput`<sup>Optional</sup> <a name="aagConfigDisabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```java
public java.lang.Object getAagConfigDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```java
public java.lang.Object getAagConfigDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterAntiAffinityGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAntiAffinityGroups">GkeonpremVmwareClusterAntiAffinityGroups</a>

---


### GkeonpremVmwareClusterAuthorizationAdminUsersList <a name="GkeonpremVmwareClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAuthorizationAdminUsersList;

new GkeonpremVmwareClusterAuthorizationAdminUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.get"></a>

```java
public GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>>

---


### GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference <a name="GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference;

new GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>

---


### GkeonpremVmwareClusterAuthorizationOutputReference <a name="GkeonpremVmwareClusterAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAuthorizationOutputReference;

new GkeonpremVmwareClusterAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers"></a>

```java
public void putAdminUsers(IResolvable OR java.util.List<GkeonpremVmwareClusterAuthorizationAdminUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>>

---

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers"></a>

```java
public void resetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList">GkeonpremVmwareClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers"></a>

```java
public GkeonpremVmwareClusterAuthorizationAdminUsersList getAdminUsers();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsersList">GkeonpremVmwareClusterAuthorizationAdminUsersList</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```java
public java.lang.Object getAdminUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationAdminUsers">GkeonpremVmwareClusterAuthorizationAdminUsers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAuthorization">GkeonpremVmwareClusterAuthorization</a>

---


### GkeonpremVmwareClusterAutoRepairConfigOutputReference <a name="GkeonpremVmwareClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference;

new GkeonpremVmwareClusterAutoRepairConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterAutoRepairConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterAutoRepairConfig">GkeonpremVmwareClusterAutoRepairConfig</a>

---


### GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference <a name="GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference;

new GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---


### GkeonpremVmwareClusterControlPlaneNodeOutputReference <a name="GkeonpremVmwareClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference;

new GkeonpremVmwareClusterControlPlaneNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig">putAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig">resetAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoResizeConfig` <a name="putAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig"></a>

```java
public void putAutoResizeConfig(GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `resetAutoResizeConfig` <a name="resetAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig"></a>

```java
public void resetAutoResizeConfig()
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus"></a>

```java
public void resetCpus()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```java
public void resetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput">autoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput">cpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput">replicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus">cpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResizeConfig`<sup>Required</sup> <a name="autoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference getAutoResizeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a>

---

##### `vsphereConfig`<sup>Required</sup> <a name="vsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList getVsphereConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a>

---

##### `autoResizeConfigInput`<sup>Optional</sup> <a name="autoResizeConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig getAutoResizeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```java
public java.lang.Number getCpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```java
public java.lang.Number getReplicasInput();
```

- *Type:* java.lang.Number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus"></a>

```java
public java.lang.Number getCpus();
```

- *Type:* java.lang.Number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterControlPlaneNode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNode">GkeonpremVmwareClusterControlPlaneNode</a>

---


### GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList <a name="GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList;

new GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference <a name="GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference;

new GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName"></a>

```java
public java.lang.String getStoragePolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterControlPlaneNodeVsphereConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a>

---


### GkeonpremVmwareClusterDataplaneV2OutputReference <a name="GkeonpremVmwareClusterDataplaneV2OutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterDataplaneV2OutputReference;

new GkeonpremVmwareClusterDataplaneV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking">resetAdvancedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled">resetDataplaneV2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled">resetWindowsDataplaneV2Enabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvancedNetworking` <a name="resetAdvancedNetworking" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking"></a>

```java
public void resetAdvancedNetworking()
```

##### `resetDataplaneV2Enabled` <a name="resetDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled"></a>

```java
public void resetDataplaneV2Enabled()
```

##### `resetWindowsDataplaneV2Enabled` <a name="resetWindowsDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled"></a>

```java
public void resetWindowsDataplaneV2Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput">advancedNetworkingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput">dataplaneV2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput">windowsDataplaneV2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking">advancedNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled">dataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled">windowsDataplaneV2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedNetworkingInput`<sup>Optional</sup> <a name="advancedNetworkingInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput"></a>

```java
public java.lang.Object getAdvancedNetworkingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataplaneV2EnabledInput`<sup>Optional</sup> <a name="dataplaneV2EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput"></a>

```java
public java.lang.Object getDataplaneV2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `windowsDataplaneV2EnabledInput`<sup>Optional</sup> <a name="windowsDataplaneV2EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput"></a>

```java
public java.lang.Object getWindowsDataplaneV2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `advancedNetworking`<sup>Required</sup> <a name="advancedNetworking" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking"></a>

```java
public java.lang.Object getAdvancedNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataplaneV2Enabled`<sup>Required</sup> <a name="dataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled"></a>

```java
public java.lang.Object getDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `windowsDataplaneV2Enabled`<sup>Required</sup> <a name="windowsDataplaneV2Enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled"></a>

```java
public java.lang.Object getWindowsDataplaneV2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterDataplaneV2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterDataplaneV2">GkeonpremVmwareClusterDataplaneV2</a>

---


### GkeonpremVmwareClusterFleetList <a name="GkeonpremVmwareClusterFleetList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterFleetList;

new GkeonpremVmwareClusterFleetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.get"></a>

```java
public GkeonpremVmwareClusterFleetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterFleetOutputReference <a name="GkeonpremVmwareClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterFleetOutputReference;

new GkeonpremVmwareClusterFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet">GkeonpremVmwareClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleetOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterFleet">GkeonpremVmwareClusterFleet</a>

---


### GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference;

new GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">resetSnatPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetSnatPool` <a name="resetSnatPool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```java
public void resetSnatPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">snatPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool">snatPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `snatPoolInput`<sup>Optional</sup> <a name="snatPoolInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```java
public java.lang.String getSnatPoolInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `snatPool`<sup>Required</sup> <a name="snatPool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```java
public java.lang.String getSnatPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterLoadBalancerF5Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

---


### GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference;

new GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">resetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">resetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">resetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">resetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneNodePort` <a name="resetControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```java
public void resetControlPlaneNodePort()
```

##### `resetIngressHttpNodePort` <a name="resetIngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```java
public void resetIngressHttpNodePort()
```

##### `resetIngressHttpsNodePort` <a name="resetIngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```java
public void resetIngressHttpsNodePort()
```

##### `resetKonnectivityServerNodePort` <a name="resetKonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```java
public void resetKonnectivityServerNodePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">controlPlaneNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">ingressHttpNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">ingressHttpsNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">konnectivityServerNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneNodePortInput`<sup>Optional</sup> <a name="controlPlaneNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```java
public java.lang.Number getControlPlaneNodePortInput();
```

- *Type:* java.lang.Number

---

##### `ingressHttpNodePortInput`<sup>Optional</sup> <a name="ingressHttpNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```java
public java.lang.Number getIngressHttpNodePortInput();
```

- *Type:* java.lang.Number

---

##### `ingressHttpsNodePortInput`<sup>Optional</sup> <a name="ingressHttpsNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```java
public java.lang.Number getIngressHttpsNodePortInput();
```

- *Type:* java.lang.Number

---

##### `konnectivityServerNodePortInput`<sup>Optional</sup> <a name="konnectivityServerNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```java
public java.lang.Number getKonnectivityServerNodePortInput();
```

- *Type:* java.lang.Number

---

##### `controlPlaneNodePort`<sup>Required</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```java
public java.lang.Number getControlPlaneNodePort();
```

- *Type:* java.lang.Number

---

##### `ingressHttpNodePort`<sup>Required</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```java
public java.lang.Number getIngressHttpNodePort();
```

- *Type:* java.lang.Number

---

##### `ingressHttpsNodePort`<sup>Required</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```java
public java.lang.Number getIngressHttpsNodePort();
```

- *Type:* java.lang.Number

---

##### `konnectivityServerNodePort`<sup>Required</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```java
public java.lang.Number getKonnectivityServerNodePort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterLoadBalancerManualLbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get"></a>

```java
public GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

---


### GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps">resetAvoidBuggyIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign">resetManualAssign</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvoidBuggyIps` <a name="resetAvoidBuggyIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps"></a>

```java
public void resetAvoidBuggyIps()
```

##### `resetManualAssign` <a name="resetManualAssign" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign"></a>

```java
public void resetManualAssign()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput">addressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput">avoidBuggyIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput">manualAssignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput">poolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps">avoidBuggyIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign">manualAssign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool">pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput"></a>

```java
public java.util.List<java.lang.String> getAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `avoidBuggyIpsInput`<sup>Optional</sup> <a name="avoidBuggyIpsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput"></a>

```java
public java.lang.Object getAvoidBuggyIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualAssignInput`<sup>Optional</sup> <a name="manualAssignInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput"></a>

```java
public java.lang.Object getManualAssignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput"></a>

```java
public java.lang.String getPoolInput();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `avoidBuggyIps`<sup>Required</sup> <a name="avoidBuggyIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps"></a>

```java
public java.lang.Object getAvoidBuggyIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `manualAssign`<sup>Required</sup> <a name="manualAssign" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign"></a>

```java
public java.lang.Object getManualAssign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>

---


### GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference;

new GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools">putAddressPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddressPools` <a name="putAddressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools"></a>

```java
public void putAddressPools(IResolvable OR java.util.List<GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools">addressPools</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput">addressPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressPools`<sup>Required</sup> <a name="addressPools" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools"></a>

```java
public GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList getAddressPools();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a>

---

##### `addressPoolsInput`<sup>Optional</sup> <a name="addressPoolsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput"></a>

```java
public java.lang.Object getAddressPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterLoadBalancerMetalLbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---


### GkeonpremVmwareClusterLoadBalancerOutputReference <a name="GkeonpremVmwareClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerOutputReference;

new GkeonpremVmwareClusterLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config">putF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig">putManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig">putMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig">putVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config">resetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig">resetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig">resetMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig">resetVipConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putF5Config` <a name="putF5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config"></a>

```java
public void putF5Config(GkeonpremVmwareClusterLoadBalancerF5Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `putManualLbConfig` <a name="putManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```java
public void putManualLbConfig(GkeonpremVmwareClusterLoadBalancerManualLbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `putMetalLbConfig` <a name="putMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```java
public void putMetalLbConfig(GkeonpremVmwareClusterLoadBalancerMetalLbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `putVipConfig` <a name="putVipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig"></a>

```java
public void putVipConfig(GkeonpremVmwareClusterLoadBalancerVipConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `resetF5Config` <a name="resetF5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config"></a>

```java
public void resetF5Config()
```

##### `resetManualLbConfig` <a name="resetManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```java
public void resetManualLbConfig()
```

##### `resetMetalLbConfig` <a name="resetMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```java
public void resetMetalLbConfig()
```

##### `resetVipConfig` <a name="resetVipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig"></a>

```java
public void resetVipConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput">f5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput">manualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput">metalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput">vipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `f5Config`<sup>Required</sup> <a name="f5Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config"></a>

```java
public GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference getF5Config();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `manualLbConfig`<sup>Required</sup> <a name="manualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```java
public GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference getManualLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `metalLbConfig`<sup>Required</sup> <a name="metalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```java
public GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference getMetalLbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig"></a>

```java
public GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference getVipConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a>

---

##### `f5ConfigInput`<sup>Optional</sup> <a name="f5ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```java
public GkeonpremVmwareClusterLoadBalancerF5Config getF5ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerF5Config">GkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `manualLbConfigInput`<sup>Optional</sup> <a name="manualLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```java
public GkeonpremVmwareClusterLoadBalancerManualLbConfig getManualLbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerManualLbConfig">GkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `metalLbConfigInput`<sup>Optional</sup> <a name="metalLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```java
public GkeonpremVmwareClusterLoadBalancerMetalLbConfig getMetalLbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerMetalLbConfig">GkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `vipConfigInput`<sup>Optional</sup> <a name="vipConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```java
public GkeonpremVmwareClusterLoadBalancerVipConfig getVipConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancer">GkeonpremVmwareClusterLoadBalancer</a>

---


### GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference;

new GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip">resetControlPlaneVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip">resetIngressVip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneVip` <a name="resetControlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip"></a>

```java
public void resetControlPlaneVip()
```

##### `resetIngressVip` <a name="resetIngressVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip"></a>

```java
public void resetIngressVip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">controlPlaneVipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput">ingressVipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">controlPlaneVip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip">ingressVip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneVipInput`<sup>Optional</sup> <a name="controlPlaneVipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```java
public java.lang.String getControlPlaneVipInput();
```

- *Type:* java.lang.String

---

##### `ingressVipInput`<sup>Optional</sup> <a name="ingressVipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput"></a>

```java
public java.lang.String getIngressVipInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```java
public java.lang.String getControlPlaneVip();
```

- *Type:* java.lang.String

---

##### `ingressVip`<sup>Required</sup> <a name="ingressVip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip"></a>

```java
public java.lang.String getIngressVip();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterLoadBalancerVipConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterLoadBalancerVipConfig">GkeonpremVmwareClusterLoadBalancerVipConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp">resetIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp"></a>

```java
public void resetIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps">putIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask">resetNetmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps"></a>

```java
public void putIps(IResolvable OR java.util.List<GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

---

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway"></a>

```java
public void resetGateway()
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps"></a>

```java
public void resetIps()
```

##### `resetNetmask` <a name="resetNetmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask"></a>

```java
public void resetNetmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput">ipsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList getIps();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```java
public java.lang.Object getIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>>

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---


### GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference;

new GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock">putControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock">resetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneIpBlock` <a name="putControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock"></a>

```java
public void putControlPlaneIpBlock(GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `resetControlPlaneIpBlock` <a name="resetControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock"></a>

```java
public void resetControlPlaneIpBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput">controlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneIpBlock`<sup>Required</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference getControlPlaneIpBlock();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a>

---

##### `controlPlaneIpBlockInput`<sup>Optional</sup> <a name="controlPlaneIpBlockInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock getControlPlaneIpBlockInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---


### GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference;

new GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference;

new GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">resetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers">resetNtpServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsSearchDomains` <a name="resetDnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```java
public void resetDnsSearchDomains()
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```java
public void resetNtpServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">dnsSearchDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">ntpServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsSearchDomainsInput`<sup>Optional</sup> <a name="dnsSearchDomainsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```java
public java.util.List<java.lang.String> getDnsSearchDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```java
public java.util.List<java.lang.String> getNtpServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSearchDomains`<sup>Required</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```java
public java.util.List<java.lang.String> getDnsSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterNetworkConfigHostConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigOutputReference;

new GkeonpremVmwareClusterNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config">putControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig">putDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig">putHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig">putStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config">resetControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig">resetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig">resetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig">resetStaticIpConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneV2Config` <a name="putControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config"></a>

```java
public void putControlPlaneV2Config(GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `putDhcpIpConfig` <a name="putDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```java
public void putDhcpIpConfig(GkeonpremVmwareClusterNetworkConfigDhcpIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `putHostConfig` <a name="putHostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig"></a>

```java
public void putHostConfig(GkeonpremVmwareClusterNetworkConfigHostConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `putStaticIpConfig` <a name="putStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```java
public void putStaticIpConfig(GkeonpremVmwareClusterNetworkConfigStaticIpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `resetControlPlaneV2Config` <a name="resetControlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config"></a>

```java
public void resetControlPlaneV2Config()
```

##### `resetDhcpIpConfig` <a name="resetDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```java
public void resetDhcpIpConfig()
```

##### `resetHostConfig` <a name="resetHostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig"></a>

```java
public void resetHostConfig()
```

##### `resetStaticIpConfig` <a name="resetStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```java
public void resetStaticIpConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config">controlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork">vcenterNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput">controlPlaneV2ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">dhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput">hostConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput">staticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneV2Config`<sup>Required</sup> <a name="controlPlaneV2Config" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference getControlPlaneV2Config();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a>

---

##### `dhcpIpConfig`<sup>Required</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference getDhcpIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `hostConfig`<sup>Required</sup> <a name="hostConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference getHostConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a>

---

##### `staticIpConfig`<sup>Required</sup> <a name="staticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference getStaticIpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `vcenterNetwork`<sup>Required</sup> <a name="vcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```java
public java.lang.String getVcenterNetwork();
```

- *Type:* java.lang.String

---

##### `controlPlaneV2ConfigInput`<sup>Optional</sup> <a name="controlPlaneV2ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput"></a>

```java
public GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config getControlPlaneV2ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `dhcpIpConfigInput`<sup>Optional</sup> <a name="dhcpIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```java
public GkeonpremVmwareClusterNetworkConfigDhcpIpConfig getDhcpIpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `hostConfigInput`<sup>Optional</sup> <a name="hostConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```java
public GkeonpremVmwareClusterNetworkConfigHostConfig getHostConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigHostConfig">GkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `staticIpConfigInput`<sup>Optional</sup> <a name="staticIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfig getStaticIpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfig">GkeonpremVmwareClusterNetworkConfig</a>

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```java
public void resetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">putIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```java
public void putIps(IResolvable OR java.util.List<GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">ipsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList getIps();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```java
public java.lang.Object getIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>>

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>

---


### GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference <a name="GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference;

new GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">putIpBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlocks` <a name="putIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```java
public void putIpBlocks(IResolvable OR java.util.List<GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">ipBlocks</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">ipBlocksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList getIpBlocks();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `ipBlocksInput`<sup>Optional</sup> <a name="ipBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```java
public java.lang.Object getIpBlocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterNetworkConfigStaticIpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterNetworkConfigStaticIpConfig">GkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---


### GkeonpremVmwareClusterStatusConditionsList <a name="GkeonpremVmwareClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStatusConditionsList;

new GkeonpremVmwareClusterStatusConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.get"></a>

```java
public GkeonpremVmwareClusterStatusConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterStatusConditionsOutputReference <a name="GkeonpremVmwareClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStatusConditionsOutputReference;

new GkeonpremVmwareClusterStatusConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions">GkeonpremVmwareClusterStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterStatusConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditions">GkeonpremVmwareClusterStatusConditions</a>

---


### GkeonpremVmwareClusterStatusList <a name="GkeonpremVmwareClusterStatusList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStatusList;

new GkeonpremVmwareClusterStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.get"></a>

```java
public GkeonpremVmwareClusterStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterStatusOutputReference <a name="GkeonpremVmwareClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStatusOutputReference;

new GkeonpremVmwareClusterStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList">GkeonpremVmwareClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus">GkeonpremVmwareClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.conditions"></a>

```java
public GkeonpremVmwareClusterStatusConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusConditionsList">GkeonpremVmwareClusterStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatusOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStatus">GkeonpremVmwareClusterStatus</a>

---


### GkeonpremVmwareClusterStorageOutputReference <a name="GkeonpremVmwareClusterStorageOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterStorageOutputReference;

new GkeonpremVmwareClusterStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput">vsphereCsiDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled">vsphereCsiDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vsphereCsiDisabledInput`<sup>Optional</sup> <a name="vsphereCsiDisabledInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput"></a>

```java
public java.lang.Object getVsphereCsiDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsphereCsiDisabled`<sup>Required</sup> <a name="vsphereCsiDisabled" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled"></a>

```java
public java.lang.Object getVsphereCsiDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorageOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterStorage">GkeonpremVmwareClusterStorage</a>

---


### GkeonpremVmwareClusterTimeoutsOutputReference <a name="GkeonpremVmwareClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterTimeoutsOutputReference;

new GkeonpremVmwareClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterTimeouts">GkeonpremVmwareClusterTimeouts</a>

---


### GkeonpremVmwareClusterUpgradePolicyOutputReference <a name="GkeonpremVmwareClusterUpgradePolicyOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterUpgradePolicyOutputReference;

new GkeonpremVmwareClusterUpgradePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly">resetControlPlaneOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneOnly` <a name="resetControlPlaneOnly" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly"></a>

```java
public void resetControlPlaneOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput">controlPlaneOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly">controlPlaneOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPlaneOnlyInput`<sup>Optional</sup> <a name="controlPlaneOnlyInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput"></a>

```java
public java.lang.Object getControlPlaneOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `controlPlaneOnly`<sup>Required</sup> <a name="controlPlaneOnly" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly"></a>

```java
public java.lang.Object getControlPlaneOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterUpgradePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterUpgradePolicy">GkeonpremVmwareClusterUpgradePolicy</a>

---


### GkeonpremVmwareClusterValidationCheckList <a name="GkeonpremVmwareClusterValidationCheckList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckList;

new GkeonpremVmwareClusterValidationCheckList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.get"></a>

```java
public GkeonpremVmwareClusterValidationCheckOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterValidationCheckOutputReference <a name="GkeonpremVmwareClusterValidationCheckOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckOutputReference;

new GkeonpremVmwareClusterValidationCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.scenario">scenario</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList">GkeonpremVmwareClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck">GkeonpremVmwareClusterValidationCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.scenario"></a>

```java
public java.lang.String getScenario();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.status"></a>

```java
public GkeonpremVmwareClusterValidationCheckStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList">GkeonpremVmwareClusterValidationCheckStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterValidationCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheck">GkeonpremVmwareClusterValidationCheck</a>

---


### GkeonpremVmwareClusterValidationCheckStatusList <a name="GkeonpremVmwareClusterValidationCheckStatusList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckStatusList;

new GkeonpremVmwareClusterValidationCheckStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.get"></a>

```java
public GkeonpremVmwareClusterValidationCheckStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterValidationCheckStatusOutputReference <a name="GkeonpremVmwareClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference;

new GkeonpremVmwareClusterValidationCheckStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result">result</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList">GkeonpremVmwareClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus">GkeonpremVmwareClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result"></a>

```java
public GkeonpremVmwareClusterValidationCheckStatusResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList">GkeonpremVmwareClusterValidationCheckStatusResultList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterValidationCheckStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatus">GkeonpremVmwareClusterValidationCheckStatus</a>

---


### GkeonpremVmwareClusterValidationCheckStatusResultList <a name="GkeonpremVmwareClusterValidationCheckStatusResultList" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckStatusResultList;

new GkeonpremVmwareClusterValidationCheckStatusResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.get"></a>

```java
public GkeonpremVmwareClusterValidationCheckStatusResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeonpremVmwareClusterValidationCheckStatusResultOutputReference <a name="GkeonpremVmwareClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference;

new GkeonpremVmwareClusterValidationCheckStatusResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult">GkeonpremVmwareClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterValidationCheckStatusResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterValidationCheckStatusResult">GkeonpremVmwareClusterValidationCheckStatusResult</a>

---


### GkeonpremVmwareClusterVcenterOutputReference <a name="GkeonpremVmwareClusterVcenterOutputReference" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.gkeonprem_vmware_cluster.GkeonpremVmwareClusterVcenterOutputReference;

new GkeonpremVmwareClusterVcenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCaCertData">resetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetResourcePool">resetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName">resetStoragePolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertData` <a name="resetCaCertData" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCaCertData"></a>

```java
public void resetCaCertData()
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetDatastore"></a>

```java
public void resetDatastore()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetResourcePool` <a name="resetResourcePool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetResourcePool"></a>

```java
public void resetResourcePool()
```

##### `resetStoragePolicyName` <a name="resetStoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName"></a>

```java
public void resetStoragePolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput">caCertDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput">resourcePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput">storagePolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertData">caCertData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastore">datastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePool">resourcePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `caCertDataInput`<sup>Optional</sup> <a name="caCertDataInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput"></a>

```java
public java.lang.String getCaCertDataInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput"></a>

```java
public java.lang.String getDatastoreInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolInput`<sup>Optional</sup> <a name="resourcePoolInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput"></a>

```java
public java.lang.String getResourcePoolInput();
```

- *Type:* java.lang.String

---

##### `storagePolicyNameInput`<sup>Optional</sup> <a name="storagePolicyNameInput" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```java
public java.lang.String getStoragePolicyNameInput();
```

- *Type:* java.lang.String

---

##### `caCertData`<sup>Required</sup> <a name="caCertData" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.caCertData"></a>

```java
public java.lang.String getCaCertData();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.datastore"></a>

```java
public java.lang.String getDatastore();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `resourcePool`<sup>Required</sup> <a name="resourcePool" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.resourcePool"></a>

```java
public java.lang.String getResourcePool();
```

- *Type:* java.lang.String

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName"></a>

```java
public java.lang.String getStoragePolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenterOutputReference.property.internalValue"></a>

```java
public GkeonpremVmwareClusterVcenter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareCluster.GkeonpremVmwareClusterVcenter">GkeonpremVmwareClusterVcenter</a>

---



