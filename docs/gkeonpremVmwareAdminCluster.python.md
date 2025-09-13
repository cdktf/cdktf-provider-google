# `gkeonpremVmwareAdminCluster` Submodule <a name="`gkeonpremVmwareAdminCluster` Submodule" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareAdminCluster <a name="GkeonpremVmwareAdminCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network_config: GkeonpremVmwareAdminClusterNetworkConfig,
  addon_node: GkeonpremVmwareAdminClusterAddonNode = None,
  annotations: typing.Mapping[str] = None,
  anti_affinity_groups: GkeonpremVmwareAdminClusterAntiAffinityGroups = None,
  authorization: GkeonpremVmwareAdminClusterAuthorization = None,
  auto_repair_config: GkeonpremVmwareAdminClusterAutoRepairConfig = None,
  bootstrap_cluster_membership: str = None,
  control_plane_node: GkeonpremVmwareAdminClusterControlPlaneNode = None,
  description: str = None,
  enable_advanced_cluster: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_type: str = None,
  load_balancer: GkeonpremVmwareAdminClusterLoadBalancer = None,
  on_prem_version: str = None,
  platform_config: GkeonpremVmwareAdminClusterPlatformConfig = None,
  private_registry_config: GkeonpremVmwareAdminClusterPrivateRegistryConfig = None,
  project: str = None,
  timeouts: GkeonpremVmwareAdminClusterTimeouts = None,
  vcenter: GkeonpremVmwareAdminClusterVcenter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The VMware admin cluster resource name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.addonNode">addon_node</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | addon_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations on the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.antiAffinityGroups">anti_affinity_groups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.autoRepairConfig">auto_repair_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.bootstrapClusterMembership">bootstrap_cluster_membership</a></code> | <code>str</code> | The bootstrap cluster this VMware admin cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.controlPlaneNode">control_plane_node</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | A human readable description of this VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.enableAdvancedCluster">enable_advanced_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the advanced cluster feature is enabled. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.imageType">image_type</a></code> | <code>str</code> | The OS image type for the VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.onPremVersion">on_prem_version</a></code> | <code>str</code> | The Anthos clusters on the VMware version for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.platformConfig">platform_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | platform_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.privateRegistryConfig">private_registry_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | private_registry_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | vcenter block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#location GkeonpremVmwareAdminCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.name"></a>

- *Type:* str

The VMware admin cluster resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#name GkeonpremVmwareAdminCluster#name}

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#network_config GkeonpremVmwareAdminCluster#network_config}

---

##### `addon_node`<sup>Optional</sup> <a name="addon_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.addonNode"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

addon_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#addon_node GkeonpremVmwareAdminCluster#addon_node}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations on the VMware Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#annotations GkeonpremVmwareAdminCluster#annotations}

---

##### `anti_affinity_groups`<sup>Optional</sup> <a name="anti_affinity_groups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.antiAffinityGroups"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#anti_affinity_groups GkeonpremVmwareAdminCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#authorization GkeonpremVmwareAdminCluster#authorization}

---

##### `auto_repair_config`<sup>Optional</sup> <a name="auto_repair_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.autoRepairConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#auto_repair_config GkeonpremVmwareAdminCluster#auto_repair_config}

---

##### `bootstrap_cluster_membership`<sup>Optional</sup> <a name="bootstrap_cluster_membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.bootstrapClusterMembership"></a>

- *Type:* str

The bootstrap cluster this VMware admin cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GkeonpremVmwareAdminCluster#bootstrap_cluster_membership}

---

##### `control_plane_node`<sup>Optional</sup> <a name="control_plane_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.controlPlaneNode"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node GkeonpremVmwareAdminCluster#control_plane_node}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.description"></a>

- *Type:* str

A human readable description of this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#description GkeonpremVmwareAdminCluster#description}

---

##### `enable_advanced_cluster`<sup>Optional</sup> <a name="enable_advanced_cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.enableAdvancedCluster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the advanced cluster feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enable_advanced_cluster GkeonpremVmwareAdminCluster#enable_advanced_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.imageType"></a>

- *Type:* str

The OS image type for the VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#image_type GkeonpremVmwareAdminCluster#image_type}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.loadBalancer"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#load_balancer GkeonpremVmwareAdminCluster#load_balancer}

---

##### `on_prem_version`<sup>Optional</sup> <a name="on_prem_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.onPremVersion"></a>

- *Type:* str

The Anthos clusters on the VMware version for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#on_prem_version GkeonpremVmwareAdminCluster#on_prem_version}

---

##### `platform_config`<sup>Optional</sup> <a name="platform_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.platformConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#platform_config GkeonpremVmwareAdminCluster#platform_config}

---

##### `private_registry_config`<sup>Optional</sup> <a name="private_registry_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.privateRegistryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

private_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#private_registry_config GkeonpremVmwareAdminCluster#private_registry_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#timeouts GkeonpremVmwareAdminCluster#timeouts}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.vcenter"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#vcenter GkeonpremVmwareAdminCluster#vcenter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode">put_addon_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups">put_anti_affinity_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig">put_auto_repair_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode">put_control_plane_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer">put_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig">put_platform_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig">put_private_registry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter">put_vcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAddonNode">reset_addon_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAntiAffinityGroups">reset_anti_affinity_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAutoRepairConfig">reset_auto_repair_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetBootstrapClusterMembership">reset_bootstrap_cluster_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetControlPlaneNode">reset_control_plane_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetEnableAdvancedCluster">reset_enable_advanced_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetImageType">reset_image_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetLoadBalancer">reset_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOnPremVersion">reset_on_prem_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPlatformConfig">reset_platform_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPrivateRegistryConfig">reset_private_registry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetVcenter">reset_vcenter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_addon_node` <a name="put_addon_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode"></a>

```python
def put_addon_node(
  auto_resize_config: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig = None
) -> None
```

###### `auto_resize_config`<sup>Optional</sup> <a name="auto_resize_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode.parameter.autoResizeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#auto_resize_config GkeonpremVmwareAdminCluster#auto_resize_config}

---

##### `put_anti_affinity_groups` <a name="put_anti_affinity_groups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups"></a>

```python
def put_anti_affinity_groups(
  aag_config_disabled: typing.Union[bool, IResolvable]
) -> None
```

###### `aag_config_disabled`<sup>Required</sup> <a name="aag_config_disabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups.parameter.aagConfigDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#aag_config_disabled GkeonpremVmwareAdminCluster#aag_config_disabled}

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization"></a>

```python
def put_authorization(
  viewer_users: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterAuthorizationViewerUsers]] = None
) -> None
```

###### `viewer_users`<sup>Optional</sup> <a name="viewer_users" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization.parameter.viewerUsers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]

viewer_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#viewer_users GkeonpremVmwareAdminCluster#viewer_users}

---

##### `put_auto_repair_config` <a name="put_auto_repair_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig"></a>

```python
def put_auto_repair_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

##### `put_control_plane_node` <a name="put_control_plane_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode"></a>

```python
def put_control_plane_node(
  cpus: typing.Union[int, float] = None,
  memory: typing.Union[int, float] = None,
  replicas: typing.Union[int, float] = None
) -> None
```

###### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode.parameter.cpus"></a>

- *Type:* typing.Union[int, float]

The number of vCPUs for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#cpus GkeonpremVmwareAdminCluster#cpus}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode.parameter.memory"></a>

- *Type:* typing.Union[int, float]

The number of mebibytes of memory for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#memory GkeonpremVmwareAdminCluster#memory}

---

###### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode.parameter.replicas"></a>

- *Type:* typing.Union[int, float]

The number of control plane nodes for this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#replicas GkeonpremVmwareAdminCluster#replicas}

---

##### `put_load_balancer` <a name="put_load_balancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer"></a>

```python
def put_load_balancer(
  vip_config: GkeonpremVmwareAdminClusterLoadBalancerVipConfig,
  f5_config: GkeonpremVmwareAdminClusterLoadBalancerF5Config = None,
  manual_lb_config: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig = None,
  metal_lb_config: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig = None
) -> None
```

###### `vip_config`<sup>Required</sup> <a name="vip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer.parameter.vipConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#vip_config GkeonpremVmwareAdminCluster#vip_config}

---

###### `f5_config`<sup>Optional</sup> <a name="f5_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer.parameter.f5Config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#f5_config GkeonpremVmwareAdminCluster#f5_config}

---

###### `manual_lb_config`<sup>Optional</sup> <a name="manual_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer.parameter.manualLbConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#manual_lb_config GkeonpremVmwareAdminCluster#manual_lb_config}

---

###### `metal_lb_config`<sup>Optional</sup> <a name="metal_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer.parameter.metalLbConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#metal_lb_config GkeonpremVmwareAdminCluster#metal_lb_config}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig"></a>

```python
def put_network_config(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  dhcp_ip_config: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig = None,
  ha_control_plane_config: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig = None,
  host_config: GkeonpremVmwareAdminClusterNetworkConfigHostConfig = None,
  static_ip_config: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig = None,
  vcenter_network: str = None
) -> None
```

###### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.podAddressCidrBlocks"></a>

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GkeonpremVmwareAdminCluster#pod_address_cidr_blocks}

---

###### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.serviceAddressCidrBlocks"></a>

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GkeonpremVmwareAdminCluster#service_address_cidr_blocks}

---

###### `dhcp_ip_config`<sup>Optional</sup> <a name="dhcp_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.dhcpIpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#dhcp_ip_config GkeonpremVmwareAdminCluster#dhcp_ip_config}

---

###### `ha_control_plane_config`<sup>Optional</sup> <a name="ha_control_plane_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.haControlPlaneConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

ha_control_plane_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ha_control_plane_config GkeonpremVmwareAdminCluster#ha_control_plane_config}

---

###### `host_config`<sup>Optional</sup> <a name="host_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.hostConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#host_config GkeonpremVmwareAdminCluster#host_config}

---

###### `static_ip_config`<sup>Optional</sup> <a name="static_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.staticIpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#static_ip_config GkeonpremVmwareAdminCluster#static_ip_config}

---

###### `vcenter_network`<sup>Optional</sup> <a name="vcenter_network" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.vcenterNetwork"></a>

- *Type:* str

vcenter_network specifies vCenter network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#vcenter_network GkeonpremVmwareAdminCluster#vcenter_network}

---

##### `put_platform_config` <a name="put_platform_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig"></a>

```python
def put_platform_config(
  required_platform_version: str = None
) -> None
```

###### `required_platform_version`<sup>Optional</sup> <a name="required_platform_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig.parameter.requiredPlatformVersion"></a>

- *Type:* str

The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#required_platform_version GkeonpremVmwareAdminCluster#required_platform_version}

---

##### `put_private_registry_config` <a name="put_private_registry_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig"></a>

```python
def put_private_registry_config(
  address: str = None,
  ca_cert: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig.parameter.address"></a>

- *Type:* str

The registry address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

###### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig.parameter.caCert"></a>

- *Type:* str

The CA certificate public key for private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert GkeonpremVmwareAdminCluster#ca_cert}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}.

---

##### `put_vcenter` <a name="put_vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter"></a>

```python
def put_vcenter(
  address: str = None,
  ca_cert_data: str = None,
  cluster: str = None,
  datacenter: str = None,
  data_disk: str = None,
  datastore: str = None,
  folder: str = None,
  resource_pool: str = None,
  storage_policy_name: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.address"></a>

- *Type:* str

The vCenter IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

###### `ca_cert_data`<sup>Optional</sup> <a name="ca_cert_data" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.caCertData"></a>

- *Type:* str

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert_data GkeonpremVmwareAdminCluster#ca_cert_data}

---

###### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.cluster"></a>

- *Type:* str

The name of the vCenter cluster for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#cluster GkeonpremVmwareAdminCluster#cluster}

---

###### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.datacenter"></a>

- *Type:* str

The name of the vCenter datacenter for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#datacenter GkeonpremVmwareAdminCluster#datacenter}

---

###### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.dataDisk"></a>

- *Type:* str

The name of the virtual machine disk (VMDK) for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#data_disk GkeonpremVmwareAdminCluster#data_disk}

---

###### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.datastore"></a>

- *Type:* str

The name of the vCenter datastore for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#datastore GkeonpremVmwareAdminCluster#datastore}

---

###### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.folder"></a>

- *Type:* str

The name of the vCenter folder for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#folder GkeonpremVmwareAdminCluster#folder}

---

###### `resource_pool`<sup>Optional</sup> <a name="resource_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.resourcePool"></a>

- *Type:* str

The name of the vCenter resource pool for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#resource_pool GkeonpremVmwareAdminCluster#resource_pool}

---

###### `storage_policy_name`<sup>Optional</sup> <a name="storage_policy_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.storagePolicyName"></a>

- *Type:* str

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#storage_policy_name GkeonpremVmwareAdminCluster#storage_policy_name}

---

##### `reset_addon_node` <a name="reset_addon_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAddonNode"></a>

```python
def reset_addon_node() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_anti_affinity_groups` <a name="reset_anti_affinity_groups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAntiAffinityGroups"></a>

```python
def reset_anti_affinity_groups() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_auto_repair_config` <a name="reset_auto_repair_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAutoRepairConfig"></a>

```python
def reset_auto_repair_config() -> None
```

##### `reset_bootstrap_cluster_membership` <a name="reset_bootstrap_cluster_membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetBootstrapClusterMembership"></a>

```python
def reset_bootstrap_cluster_membership() -> None
```

##### `reset_control_plane_node` <a name="reset_control_plane_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetControlPlaneNode"></a>

```python
def reset_control_plane_node() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_advanced_cluster` <a name="reset_enable_advanced_cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetEnableAdvancedCluster"></a>

```python
def reset_enable_advanced_cluster() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_type` <a name="reset_image_type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetImageType"></a>

```python
def reset_image_type() -> None
```

##### `reset_load_balancer` <a name="reset_load_balancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetLoadBalancer"></a>

```python
def reset_load_balancer() -> None
```

##### `reset_on_prem_version` <a name="reset_on_prem_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOnPremVersion"></a>

```python
def reset_on_prem_version() -> None
```

##### `reset_platform_config` <a name="reset_platform_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPlatformConfig"></a>

```python
def reset_platform_config() -> None
```

##### `reset_private_registry_config` <a name="reset_private_registry_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPrivateRegistryConfig"></a>

```python
def reset_private_registry_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vcenter` <a name="reset_vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetVcenter"></a>

```python
def reset_vcenter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeonpremVmwareAdminCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeonpremVmwareAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNode">addon_node</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference">GkeonpremVmwareAdminClusterAddonNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroups">anti_affinity_groups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference">GkeonpremVmwareAdminClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfig">auto_repair_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNode">control_plane_node</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList">GkeonpremVmwareAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference">GkeonpremVmwareAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfig">platform_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference">GkeonpremVmwareAdminClusterPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfig">private_registry_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference">GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList">GkeonpremVmwareAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference">GkeonpremVmwareAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference">GkeonpremVmwareAdminClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNodeInput">addon_node_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput">anti_affinity_groups_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfigInput">auto_repair_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput">bootstrap_cluster_membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNodeInput">control_plane_node_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedClusterInput">enable_advanced_cluster_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancerInput">load_balancer_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersionInput">on_prem_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfigInput">platform_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfigInput">private_registry_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenterInput">vcenter_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembership">bootstrap_cluster_membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedCluster">enable_advanced_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersion">on_prem_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addon_node`<sup>Required</sup> <a name="addon_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNode"></a>

```python
addon_node: GkeonpremVmwareAdminClusterAddonNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference">GkeonpremVmwareAdminClusterAddonNodeOutputReference</a>

---

##### `anti_affinity_groups`<sup>Required</sup> <a name="anti_affinity_groups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroups"></a>

```python
anti_affinity_groups: GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorization"></a>

```python
authorization: GkeonpremVmwareAdminClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference">GkeonpremVmwareAdminClusterAuthorizationOutputReference</a>

---

##### `auto_repair_config`<sup>Required</sup> <a name="auto_repair_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfig"></a>

```python
auto_repair_config: GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a>

---

##### `control_plane_node`<sup>Required</sup> <a name="control_plane_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNode"></a>

```python
control_plane_node: GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fleet"></a>

```python
fleet: GkeonpremVmwareAdminClusterFleetList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList">GkeonpremVmwareAdminClusterFleetList</a>

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancer"></a>

```python
load_balancer: GkeonpremVmwareAdminClusterLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference">GkeonpremVmwareAdminClusterLoadBalancerOutputReference</a>

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfig"></a>

```python
network_config: GkeonpremVmwareAdminClusterNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigOutputReference</a>

---

##### `platform_config`<sup>Required</sup> <a name="platform_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfig"></a>

```python
platform_config: GkeonpremVmwareAdminClusterPlatformConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference">GkeonpremVmwareAdminClusterPlatformConfigOutputReference</a>

---

##### `private_registry_config`<sup>Required</sup> <a name="private_registry_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfig"></a>

```python
private_registry_config: GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference">GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.status"></a>

```python
status: GkeonpremVmwareAdminClusterStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList">GkeonpremVmwareAdminClusterStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeouts"></a>

```python
timeouts: GkeonpremVmwareAdminClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference">GkeonpremVmwareAdminClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenter"></a>

```python
vcenter: GkeonpremVmwareAdminClusterVcenterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference">GkeonpremVmwareAdminClusterVcenterOutputReference</a>

---

##### `addon_node_input`<sup>Optional</sup> <a name="addon_node_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNodeInput"></a>

```python
addon_node_input: GkeonpremVmwareAdminClusterAddonNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `anti_affinity_groups_input`<sup>Optional</sup> <a name="anti_affinity_groups_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput"></a>

```python
anti_affinity_groups_input: GkeonpremVmwareAdminClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorizationInput"></a>

```python
authorization_input: GkeonpremVmwareAdminClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---

##### `auto_repair_config_input`<sup>Optional</sup> <a name="auto_repair_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfigInput"></a>

```python
auto_repair_config_input: GkeonpremVmwareAdminClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `bootstrap_cluster_membership_input`<sup>Optional</sup> <a name="bootstrap_cluster_membership_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput"></a>

```python
bootstrap_cluster_membership_input: str
```

- *Type:* str

---

##### `control_plane_node_input`<sup>Optional</sup> <a name="control_plane_node_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNodeInput"></a>

```python
control_plane_node_input: GkeonpremVmwareAdminClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_advanced_cluster_input`<sup>Optional</sup> <a name="enable_advanced_cluster_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedClusterInput"></a>

```python
enable_advanced_cluster_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancerInput"></a>

```python
load_balancer_input: GkeonpremVmwareAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfigInput"></a>

```python
network_config_input: GkeonpremVmwareAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `on_prem_version_input`<sup>Optional</sup> <a name="on_prem_version_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersionInput"></a>

```python
on_prem_version_input: str
```

- *Type:* str

---

##### `platform_config_input`<sup>Optional</sup> <a name="platform_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfigInput"></a>

```python
platform_config_input: GkeonpremVmwareAdminClusterPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `private_registry_config_input`<sup>Optional</sup> <a name="private_registry_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfigInput"></a>

```python
private_registry_config_input: GkeonpremVmwareAdminClusterPrivateRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeonpremVmwareAdminClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>]

---

##### `vcenter_input`<sup>Optional</sup> <a name="vcenter_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenterInput"></a>

```python
vcenter_input: GkeonpremVmwareAdminClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bootstrap_cluster_membership`<sup>Required</sup> <a name="bootstrap_cluster_membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembership"></a>

```python
bootstrap_cluster_membership: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_advanced_cluster`<sup>Required</sup> <a name="enable_advanced_cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedCluster"></a>

```python
enable_advanced_cluster: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_prem_version`<sup>Required</sup> <a name="on_prem_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersion"></a>

```python
on_prem_version: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareAdminClusterAddonNode <a name="GkeonpremVmwareAdminClusterAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode(
  auto_resize_config: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig">auto_resize_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | auto_resize_config block. |

---

##### `auto_resize_config`<sup>Optional</sup> <a name="auto_resize_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig"></a>

```python
auto_resize_config: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#auto_resize_config GkeonpremVmwareAdminCluster#auto_resize_config}

---

### GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig <a name="GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable controle plane node auto resizing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable controle plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterAntiAffinityGroups <a name="GkeonpremVmwareAdminClusterAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups(
  aag_config_disabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled">aag_config_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `aag_config_disabled`<sup>Required</sup> <a name="aag_config_disabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```python
aag_config_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#aag_config_disabled GkeonpremVmwareAdminCluster#aag_config_disabled}

---

### GkeonpremVmwareAdminClusterAuthorization <a name="GkeonpremVmwareAdminClusterAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization(
  viewer_users: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterAuthorizationViewerUsers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.property.viewerUsers">viewer_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]</code> | viewer_users block. |

---

##### `viewer_users`<sup>Optional</sup> <a name="viewer_users" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.property.viewerUsers"></a>

```python
viewer_users: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterAuthorizationViewerUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]

viewer_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#viewer_users GkeonpremVmwareAdminCluster#viewer_users}

---

### GkeonpremVmwareAdminClusterAuthorizationViewerUsers <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers(
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username">username</a></code> | <code>str</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username"></a>

```python
username: str
```

- *Type:* str

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#username GkeonpremVmwareAdminCluster#username}

---

### GkeonpremVmwareAdminClusterAutoRepairConfig <a name="GkeonpremVmwareAdminClusterAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether auto repair is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterConfig <a name="GkeonpremVmwareAdminClusterConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network_config: GkeonpremVmwareAdminClusterNetworkConfig,
  addon_node: GkeonpremVmwareAdminClusterAddonNode = None,
  annotations: typing.Mapping[str] = None,
  anti_affinity_groups: GkeonpremVmwareAdminClusterAntiAffinityGroups = None,
  authorization: GkeonpremVmwareAdminClusterAuthorization = None,
  auto_repair_config: GkeonpremVmwareAdminClusterAutoRepairConfig = None,
  bootstrap_cluster_membership: str = None,
  control_plane_node: GkeonpremVmwareAdminClusterControlPlaneNode = None,
  description: str = None,
  enable_advanced_cluster: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_type: str = None,
  load_balancer: GkeonpremVmwareAdminClusterLoadBalancer = None,
  on_prem_version: str = None,
  platform_config: GkeonpremVmwareAdminClusterPlatformConfig = None,
  private_registry_config: GkeonpremVmwareAdminClusterPrivateRegistryConfig = None,
  project: str = None,
  timeouts: GkeonpremVmwareAdminClusterTimeouts = None,
  vcenter: GkeonpremVmwareAdminClusterVcenter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.name">name</a></code> | <code>str</code> | The VMware admin cluster resource name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.addonNode">addon_node</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | addon_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations on the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups">anti_affinity_groups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.autoRepairConfig">auto_repair_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership">bootstrap_cluster_membership</a></code> | <code>str</code> | The bootstrap cluster this VMware admin cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.controlPlaneNode">control_plane_node</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.description">description</a></code> | <code>str</code> | A human readable description of this VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.enableAdvancedCluster">enable_advanced_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the advanced cluster feature is enabled. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.imageType">image_type</a></code> | <code>str</code> | The OS image type for the VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.onPremVersion">on_prem_version</a></code> | <code>str</code> | The Anthos clusters on the VMware version for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.platformConfig">platform_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | platform_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.privateRegistryConfig">private_registry_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | private_registry_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | vcenter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#location GkeonpremVmwareAdminCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The VMware admin cluster resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#name GkeonpremVmwareAdminCluster#name}

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.networkConfig"></a>

```python
network_config: GkeonpremVmwareAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#network_config GkeonpremVmwareAdminCluster#network_config}

---

##### `addon_node`<sup>Optional</sup> <a name="addon_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.addonNode"></a>

```python
addon_node: GkeonpremVmwareAdminClusterAddonNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

addon_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#addon_node GkeonpremVmwareAdminCluster#addon_node}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations on the VMware Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#annotations GkeonpremVmwareAdminCluster#annotations}

---

##### `anti_affinity_groups`<sup>Optional</sup> <a name="anti_affinity_groups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups"></a>

```python
anti_affinity_groups: GkeonpremVmwareAdminClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#anti_affinity_groups GkeonpremVmwareAdminCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.authorization"></a>

```python
authorization: GkeonpremVmwareAdminClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#authorization GkeonpremVmwareAdminCluster#authorization}

---

##### `auto_repair_config`<sup>Optional</sup> <a name="auto_repair_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.autoRepairConfig"></a>

```python
auto_repair_config: GkeonpremVmwareAdminClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#auto_repair_config GkeonpremVmwareAdminCluster#auto_repair_config}

---

##### `bootstrap_cluster_membership`<sup>Optional</sup> <a name="bootstrap_cluster_membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership"></a>

```python
bootstrap_cluster_membership: str
```

- *Type:* str

The bootstrap cluster this VMware admin cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GkeonpremVmwareAdminCluster#bootstrap_cluster_membership}

---

##### `control_plane_node`<sup>Optional</sup> <a name="control_plane_node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.controlPlaneNode"></a>

```python
control_plane_node: GkeonpremVmwareAdminClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node GkeonpremVmwareAdminCluster#control_plane_node}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human readable description of this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#description GkeonpremVmwareAdminCluster#description}

---

##### `enable_advanced_cluster`<sup>Optional</sup> <a name="enable_advanced_cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.enableAdvancedCluster"></a>

```python
enable_advanced_cluster: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the advanced cluster feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enable_advanced_cluster GkeonpremVmwareAdminCluster#enable_advanced_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

The OS image type for the VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#image_type GkeonpremVmwareAdminCluster#image_type}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.loadBalancer"></a>

```python
load_balancer: GkeonpremVmwareAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#load_balancer GkeonpremVmwareAdminCluster#load_balancer}

---

##### `on_prem_version`<sup>Optional</sup> <a name="on_prem_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.onPremVersion"></a>

```python
on_prem_version: str
```

- *Type:* str

The Anthos clusters on the VMware version for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#on_prem_version GkeonpremVmwareAdminCluster#on_prem_version}

---

##### `platform_config`<sup>Optional</sup> <a name="platform_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.platformConfig"></a>

```python
platform_config: GkeonpremVmwareAdminClusterPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#platform_config GkeonpremVmwareAdminCluster#platform_config}

---

##### `private_registry_config`<sup>Optional</sup> <a name="private_registry_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.privateRegistryConfig"></a>

```python
private_registry_config: GkeonpremVmwareAdminClusterPrivateRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

private_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#private_registry_config GkeonpremVmwareAdminCluster#private_registry_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.timeouts"></a>

```python
timeouts: GkeonpremVmwareAdminClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#timeouts GkeonpremVmwareAdminCluster#timeouts}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.vcenter"></a>

```python
vcenter: GkeonpremVmwareAdminClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#vcenter GkeonpremVmwareAdminCluster#vcenter}

---

### GkeonpremVmwareAdminClusterControlPlaneNode <a name="GkeonpremVmwareAdminClusterControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode(
  cpus: typing.Union[int, float] = None,
  memory: typing.Union[int, float] = None,
  replicas: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | The number of vCPUs for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The number of mebibytes of memory for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | The number of control plane nodes for this VMware admin cluster. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of vCPUs for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#cpus GkeonpremVmwareAdminCluster#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of mebibytes of memory for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#memory GkeonpremVmwareAdminCluster#memory}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of control plane nodes for this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#replicas GkeonpremVmwareAdminCluster#replicas}

---

### GkeonpremVmwareAdminClusterFleet <a name="GkeonpremVmwareAdminClusterFleet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet()
```


### GkeonpremVmwareAdminClusterLoadBalancer <a name="GkeonpremVmwareAdminClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer(
  vip_config: GkeonpremVmwareAdminClusterLoadBalancerVipConfig,
  f5_config: GkeonpremVmwareAdminClusterLoadBalancerF5Config = None,
  manual_lb_config: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig = None,
  metal_lb_config: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig">vip_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.f5Config">f5_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig">manual_lb_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig">metal_lb_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |

---

##### `vip_config`<sup>Required</sup> <a name="vip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig"></a>

```python
vip_config: GkeonpremVmwareAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#vip_config GkeonpremVmwareAdminCluster#vip_config}

---

##### `f5_config`<sup>Optional</sup> <a name="f5_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.f5Config"></a>

```python
f5_config: GkeonpremVmwareAdminClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#f5_config GkeonpremVmwareAdminCluster#f5_config}

---

##### `manual_lb_config`<sup>Optional</sup> <a name="manual_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig"></a>

```python
manual_lb_config: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#manual_lb_config GkeonpremVmwareAdminCluster#manual_lb_config}

---

##### `metal_lb_config`<sup>Optional</sup> <a name="metal_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig"></a>

```python
metal_lb_config: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#metal_lb_config GkeonpremVmwareAdminCluster#metal_lb_config}

---

### GkeonpremVmwareAdminClusterLoadBalancerF5Config <a name="GkeonpremVmwareAdminClusterLoadBalancerF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config(
  address: str = None,
  partition: str = None,
  snat_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address">address</a></code> | <code>str</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition">partition</a></code> | <code>str</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool">snat_pool</a></code> | <code>str</code> | The pool name. Only necessary, if using SNAT. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address"></a>

```python
address: str
```

- *Type:* str

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition"></a>

```python
partition: str
```

- *Type:* str

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#partition GkeonpremVmwareAdminCluster#partition}

---

##### `snat_pool`<sup>Optional</sup> <a name="snat_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool"></a>

```python
snat_pool: str
```

- *Type:* str

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#snat_pool GkeonpremVmwareAdminCluster#snat_pool}

---

### GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig(
  addons_node_port: typing.Union[int, float] = None,
  control_plane_node_port: typing.Union[int, float] = None,
  ingress_http_node_port: typing.Union[int, float] = None,
  ingress_https_node_port: typing.Union[int, float] = None,
  konnectivity_server_node_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort">addons_node_port</a></code> | <code>typing.Union[int, float]</code> | NodePort for add-ons server in the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">control_plane_node_port</a></code> | <code>typing.Union[int, float]</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">ingress_http_node_port</a></code> | <code>typing.Union[int, float]</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">ingress_https_node_port</a></code> | <code>typing.Union[int, float]</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">konnectivity_server_node_port</a></code> | <code>typing.Union[int, float]</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `addons_node_port`<sup>Optional</sup> <a name="addons_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort"></a>

```python
addons_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

NodePort for add-ons server in the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#addons_node_port GkeonpremVmwareAdminCluster#addons_node_port}

---

##### `control_plane_node_port`<sup>Optional</sup> <a name="control_plane_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```python
control_plane_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node_port GkeonpremVmwareAdminCluster#control_plane_node_port}

---

##### `ingress_http_node_port`<sup>Optional</sup> <a name="ingress_http_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```python
ingress_http_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ingress_http_node_port GkeonpremVmwareAdminCluster#ingress_http_node_port}

---

##### `ingress_https_node_port`<sup>Optional</sup> <a name="ingress_https_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```python
ingress_https_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ingress_https_node_port GkeonpremVmwareAdminCluster#ingress_https_node_port}

---

##### `konnectivity_server_node_port`<sup>Optional</sup> <a name="konnectivity_server_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```python
konnectivity_server_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GkeonpremVmwareAdminCluster#konnectivity_server_node_port}

---

### GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Metal LB is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Metal LB is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterLoadBalancerVipConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig(
  control_plane_vip: str,
  addons_vip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">control_plane_vip</a></code> | <code>str</code> | The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip">addons_vip</a></code> | <code>str</code> | The VIP to configure the load balancer for add-ons. |

---

##### `control_plane_vip`<sup>Required</sup> <a name="control_plane_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```python
control_plane_vip: str
```

- *Type:* str

The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_vip GkeonpremVmwareAdminCluster#control_plane_vip}

---

##### `addons_vip`<sup>Optional</sup> <a name="addons_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip"></a>

```python
addons_vip: str
```

- *Type:* str

The VIP to configure the load balancer for add-ons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#addons_vip GkeonpremVmwareAdminCluster#addons_vip}

---

### GkeonpremVmwareAdminClusterNetworkConfig <a name="GkeonpremVmwareAdminClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig(
  pod_address_cidr_blocks: typing.List[str],
  service_address_cidr_blocks: typing.List[str],
  dhcp_ip_config: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig = None,
  ha_control_plane_config: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig = None,
  host_config: GkeonpremVmwareAdminClusterNetworkConfigHostConfig = None,
  static_ip_config: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig = None,
  vcenter_network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig">dhcp_ip_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig">ha_control_plane_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | ha_control_plane_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig">host_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig">static_ip_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork">vcenter_network</a></code> | <code>str</code> | vcenter_network specifies vCenter network name. |

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GkeonpremVmwareAdminCluster#pod_address_cidr_blocks}

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GkeonpremVmwareAdminCluster#service_address_cidr_blocks}

---

##### `dhcp_ip_config`<sup>Optional</sup> <a name="dhcp_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig"></a>

```python
dhcp_ip_config: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#dhcp_ip_config GkeonpremVmwareAdminCluster#dhcp_ip_config}

---

##### `ha_control_plane_config`<sup>Optional</sup> <a name="ha_control_plane_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig"></a>

```python
ha_control_plane_config: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

ha_control_plane_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ha_control_plane_config GkeonpremVmwareAdminCluster#ha_control_plane_config}

---

##### `host_config`<sup>Optional</sup> <a name="host_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig"></a>

```python
host_config: GkeonpremVmwareAdminClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#host_config GkeonpremVmwareAdminCluster#host_config}

---

##### `static_ip_config`<sup>Optional</sup> <a name="static_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig"></a>

```python
static_ip_config: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#static_ip_config GkeonpremVmwareAdminCluster#static_ip_config}

---

##### `vcenter_network`<sup>Optional</sup> <a name="vcenter_network" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork"></a>

```python
vcenter_network: str
```

- *Type:* str

vcenter_network specifies vCenter network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#vcenter_network GkeonpremVmwareAdminCluster#vcenter_network}

---

### GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig(
  control_plane_ip_block: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock">control_plane_ip_block</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `control_plane_ip_block`<sup>Optional</sup> <a name="control_plane_ip_block" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock"></a>

```python
control_plane_ip_block: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_ip_block GkeonpremVmwareAdminCluster#control_plane_ip_block}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock(
  gateway: str,
  ips: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]],
  netmask: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway">gateway</a></code> | <code>str</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips">ips</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask">netmask</a></code> | <code>str</code> | The netmask used by the VMware Admin Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips"></a>

```python
ips: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps(
  ip: str,
  hostname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip">ip</a></code> | <code>str</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname">hostname</a></code> | <code>str</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip"></a>

```python
ip: str
```

- *Type:* str

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}

---

### GkeonpremVmwareAdminClusterNetworkConfigHostConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig(
  dns_search_domains: typing.List[str] = None,
  dns_servers: typing.List[str] = None,
  ntp_servers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains">dns_search_domains</a></code> | <code>typing.List[str]</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | NTP servers. |

---

##### `dns_search_domains`<sup>Optional</sup> <a name="dns_search_domains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```python
dns_search_domains: typing.List[str]
```

- *Type:* typing.List[str]

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#dns_search_domains GkeonpremVmwareAdminCluster#dns_search_domains}

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#dns_servers GkeonpremVmwareAdminCluster#dns_servers}

---

##### `ntp_servers`<sup>Optional</sup> <a name="ntp_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers"></a>

```python
ntp_servers: typing.List[str]
```

- *Type:* typing.List[str]

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ntp_servers GkeonpremVmwareAdminCluster#ntp_servers}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig(
  ip_blocks: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks">ip_blocks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]</code> | ip_blocks block. |

---

##### `ip_blocks`<sup>Optional</sup> <a name="ip_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```python
ip_blocks: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ip_blocks GkeonpremVmwareAdminCluster#ip_blocks}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks(
  gateway: str,
  ips: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps]],
  netmask: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">gateway</a></code> | <code>str</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">ips</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">netmask</a></code> | <code>str</code> | The netmask used by the VMware Admin Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```python
ips: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps(
  ip: str,
  hostname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">ip</a></code> | <code>str</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">hostname</a></code> | <code>str</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```python
ip: str
```

- *Type:* str

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}

---

### GkeonpremVmwareAdminClusterPlatformConfig <a name="GkeonpremVmwareAdminClusterPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig(
  required_platform_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion">required_platform_version</a></code> | <code>str</code> | The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. |

---

##### `required_platform_version`<sup>Optional</sup> <a name="required_platform_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion"></a>

```python
required_platform_version: str
```

- *Type:* str

The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#required_platform_version GkeonpremVmwareAdminCluster#required_platform_version}

---

### GkeonpremVmwareAdminClusterPlatformConfigBundles <a name="GkeonpremVmwareAdminClusterPlatformConfigBundles" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles()
```


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus()
```


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions()
```


### GkeonpremVmwareAdminClusterPlatformConfigStatus <a name="GkeonpremVmwareAdminClusterPlatformConfigStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus()
```


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditions <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions()
```


### GkeonpremVmwareAdminClusterPrivateRegistryConfig <a name="GkeonpremVmwareAdminClusterPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig(
  address: str = None,
  ca_cert: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.address">address</a></code> | <code>str</code> | The registry address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.caCert">ca_cert</a></code> | <code>str</code> | The CA certificate public key for private registry. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The registry address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

The CA certificate public key for private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert GkeonpremVmwareAdminCluster#ca_cert}

---

### GkeonpremVmwareAdminClusterStatus <a name="GkeonpremVmwareAdminClusterStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus()
```


### GkeonpremVmwareAdminClusterStatusConditions <a name="GkeonpremVmwareAdminClusterStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions()
```


### GkeonpremVmwareAdminClusterTimeouts <a name="GkeonpremVmwareAdminClusterTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}.

---

### GkeonpremVmwareAdminClusterVcenter <a name="GkeonpremVmwareAdminClusterVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter(
  address: str = None,
  ca_cert_data: str = None,
  cluster: str = None,
  datacenter: str = None,
  data_disk: str = None,
  datastore: str = None,
  folder: str = None,
  resource_pool: str = None,
  storage_policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.address">address</a></code> | <code>str</code> | The vCenter IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.caCertData">ca_cert_data</a></code> | <code>str</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.cluster">cluster</a></code> | <code>str</code> | The name of the vCenter cluster for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datacenter">datacenter</a></code> | <code>str</code> | The name of the vCenter datacenter for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.dataDisk">data_disk</a></code> | <code>str</code> | The name of the virtual machine disk (VMDK) for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datastore">datastore</a></code> | <code>str</code> | The name of the vCenter datastore for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.folder">folder</a></code> | <code>str</code> | The name of the vCenter folder for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.resourcePool">resource_pool</a></code> | <code>str</code> | The name of the vCenter resource pool for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.storagePolicyName">storage_policy_name</a></code> | <code>str</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.address"></a>

```python
address: str
```

- *Type:* str

The vCenter IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `ca_cert_data`<sup>Optional</sup> <a name="ca_cert_data" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.caCertData"></a>

```python
ca_cert_data: str
```

- *Type:* str

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert_data GkeonpremVmwareAdminCluster#ca_cert_data}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The name of the vCenter cluster for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#cluster GkeonpremVmwareAdminCluster#cluster}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

The name of the vCenter datacenter for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#datacenter GkeonpremVmwareAdminCluster#datacenter}

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.dataDisk"></a>

```python
data_disk: str
```

- *Type:* str

The name of the virtual machine disk (VMDK) for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#data_disk GkeonpremVmwareAdminCluster#data_disk}

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datastore"></a>

```python
datastore: str
```

- *Type:* str

The name of the vCenter datastore for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#datastore GkeonpremVmwareAdminCluster#datastore}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.folder"></a>

```python
folder: str
```

- *Type:* str

The name of the vCenter folder for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#folder GkeonpremVmwareAdminCluster#folder}

---

##### `resource_pool`<sup>Optional</sup> <a name="resource_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.resourcePool"></a>

```python
resource_pool: str
```

- *Type:* str

The name of the vCenter resource pool for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#resource_pool GkeonpremVmwareAdminCluster#resource_pool}

---

##### `storage_policy_name`<sup>Optional</sup> <a name="storage_policy_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.storagePolicyName"></a>

```python
storage_policy_name: str
```

- *Type:* str

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#storage_policy_name GkeonpremVmwareAdminCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference <a name="GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---


### GkeonpremVmwareAdminClusterAddonNodeOutputReference <a name="GkeonpremVmwareAdminClusterAddonNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig">put_auto_resize_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig">reset_auto_resize_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_resize_config` <a name="put_auto_resize_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig"></a>

```python
def put_auto_resize_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable controle plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

##### `reset_auto_resize_config` <a name="reset_auto_resize_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig"></a>

```python
def reset_auto_resize_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig">auto_resize_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput">auto_resize_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resize_config`<sup>Required</sup> <a name="auto_resize_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig"></a>

```python
auto_resize_config: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a>

---

##### `auto_resize_config_input`<sup>Optional</sup> <a name="auto_resize_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput"></a>

```python
auto_resize_config_input: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterAddonNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---


### GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference <a name="GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">aag_config_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">aag_config_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aag_config_disabled_input`<sup>Optional</sup> <a name="aag_config_disabled_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```python
aag_config_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aag_config_disabled`<sup>Required</sup> <a name="aag_config_disabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```python
aag_config_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---


### GkeonpremVmwareAdminClusterAuthorizationOutputReference <a name="GkeonpremVmwareAdminClusterAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers">put_viewer_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers">reset_viewer_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_viewer_users` <a name="put_viewer_users" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers"></a>

```python
def put_viewer_users(
  value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterAuthorizationViewerUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]

---

##### `reset_viewer_users` <a name="reset_viewer_users" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers"></a>

```python
def reset_viewer_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers">viewer_users</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput">viewer_users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `viewer_users`<sup>Required</sup> <a name="viewer_users" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers"></a>

```python
viewer_users: GkeonpremVmwareAdminClusterAuthorizationViewerUsersList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a>

---

##### `viewer_users_input`<sup>Optional</sup> <a name="viewer_users_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput"></a>

```python
viewer_users_input: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterAuthorizationViewerUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---


### GkeonpremVmwareAdminClusterAuthorizationViewerUsersList <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsersList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterAuthorizationViewerUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]]

---


### GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremVmwareAdminClusterAuthorizationViewerUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>]

---


### GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference <a name="GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---


### GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference <a name="GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus">reset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas">reset_replicas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpus` <a name="reset_cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus"></a>

```python
def reset_cpus() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_replicas` <a name="reset_replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```python
def reset_replicas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput">cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput">replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpus_input`<sup>Optional</sup> <a name="cpus_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```python
cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```python
replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---


### GkeonpremVmwareAdminClusterFleetList <a name="GkeonpremVmwareAdminClusterFleetList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterFleetOutputReference <a name="GkeonpremVmwareAdminClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet">GkeonpremVmwareAdminClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet">GkeonpremVmwareAdminClusterFleet</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">reset_snat_pool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_snat_pool` <a name="reset_snat_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```python
def reset_snat_pool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">snat_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool">snat_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `snat_pool_input`<sup>Optional</sup> <a name="snat_pool_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```python
snat_pool_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `snat_pool`<sup>Required</sup> <a name="snat_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```python
snat_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort">reset_addons_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">reset_control_plane_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">reset_ingress_http_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">reset_ingress_https_node_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">reset_konnectivity_server_node_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_addons_node_port` <a name="reset_addons_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort"></a>

```python
def reset_addons_node_port() -> None
```

##### `reset_control_plane_node_port` <a name="reset_control_plane_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```python
def reset_control_plane_node_port() -> None
```

##### `reset_ingress_http_node_port` <a name="reset_ingress_http_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```python
def reset_ingress_http_node_port() -> None
```

##### `reset_ingress_https_node_port` <a name="reset_ingress_https_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```python
def reset_ingress_https_node_port() -> None
```

##### `reset_konnectivity_server_node_port` <a name="reset_konnectivity_server_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```python
def reset_konnectivity_server_node_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput">addons_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">control_plane_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">ingress_http_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">ingress_https_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">konnectivity_server_node_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort">addons_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">control_plane_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">ingress_http_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">ingress_https_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">konnectivity_server_node_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addons_node_port_input`<sup>Optional</sup> <a name="addons_node_port_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput"></a>

```python
addons_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `control_plane_node_port_input`<sup>Optional</sup> <a name="control_plane_node_port_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```python
control_plane_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_http_node_port_input`<sup>Optional</sup> <a name="ingress_http_node_port_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```python
ingress_http_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_https_node_port_input`<sup>Optional</sup> <a name="ingress_https_node_port_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```python
ingress_https_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `konnectivity_server_node_port_input`<sup>Optional</sup> <a name="konnectivity_server_node_port_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```python
konnectivity_server_node_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `addons_node_port`<sup>Required</sup> <a name="addons_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort"></a>

```python
addons_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `control_plane_node_port`<sup>Required</sup> <a name="control_plane_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```python
control_plane_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_http_node_port`<sup>Required</sup> <a name="ingress_http_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```python
ingress_http_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingress_https_node_port`<sup>Required</sup> <a name="ingress_https_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```python
ingress_https_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `konnectivity_server_node_port`<sup>Required</sup> <a name="konnectivity_server_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```python
konnectivity_server_node_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config">put_f5_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig">put_manual_lb_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig">put_metal_lb_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig">put_vip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config">reset_f5_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig">reset_manual_lb_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig">reset_metal_lb_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_f5_config` <a name="put_f5_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config"></a>

```python
def put_f5_config(
  address: str = None,
  partition: str = None,
  snat_pool: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config.parameter.address"></a>

- *Type:* str

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

###### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config.parameter.partition"></a>

- *Type:* str

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#partition GkeonpremVmwareAdminCluster#partition}

---

###### `snat_pool`<sup>Optional</sup> <a name="snat_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config.parameter.snatPool"></a>

- *Type:* str

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#snat_pool GkeonpremVmwareAdminCluster#snat_pool}

---

##### `put_manual_lb_config` <a name="put_manual_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```python
def put_manual_lb_config(
  addons_node_port: typing.Union[int, float] = None,
  control_plane_node_port: typing.Union[int, float] = None,
  ingress_http_node_port: typing.Union[int, float] = None,
  ingress_https_node_port: typing.Union[int, float] = None,
  konnectivity_server_node_port: typing.Union[int, float] = None
) -> None
```

###### `addons_node_port`<sup>Optional</sup> <a name="addons_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.addonsNodePort"></a>

- *Type:* typing.Union[int, float]

NodePort for add-ons server in the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#addons_node_port GkeonpremVmwareAdminCluster#addons_node_port}

---

###### `control_plane_node_port`<sup>Optional</sup> <a name="control_plane_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.controlPlaneNodePort"></a>

- *Type:* typing.Union[int, float]

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node_port GkeonpremVmwareAdminCluster#control_plane_node_port}

---

###### `ingress_http_node_port`<sup>Optional</sup> <a name="ingress_http_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.ingressHttpNodePort"></a>

- *Type:* typing.Union[int, float]

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ingress_http_node_port GkeonpremVmwareAdminCluster#ingress_http_node_port}

---

###### `ingress_https_node_port`<sup>Optional</sup> <a name="ingress_https_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.ingressHttpsNodePort"></a>

- *Type:* typing.Union[int, float]

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ingress_https_node_port GkeonpremVmwareAdminCluster#ingress_https_node_port}

---

###### `konnectivity_server_node_port`<sup>Optional</sup> <a name="konnectivity_server_node_port" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.konnectivityServerNodePort"></a>

- *Type:* typing.Union[int, float]

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GkeonpremVmwareAdminCluster#konnectivity_server_node_port}

---

##### `put_metal_lb_config` <a name="put_metal_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```python
def put_metal_lb_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Metal LB is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

##### `put_vip_config` <a name="put_vip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```python
def put_vip_config(
  control_plane_vip: str,
  addons_vip: str = None
) -> None
```

###### `control_plane_vip`<sup>Required</sup> <a name="control_plane_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.controlPlaneVip"></a>

- *Type:* str

The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_vip GkeonpremVmwareAdminCluster#control_plane_vip}

---

###### `addons_vip`<sup>Optional</sup> <a name="addons_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.addonsVip"></a>

- *Type:* str

The VIP to configure the load balancer for add-ons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#addons_vip GkeonpremVmwareAdminCluster#addons_vip}

---

##### `reset_f5_config` <a name="reset_f5_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config"></a>

```python
def reset_f5_config() -> None
```

##### `reset_manual_lb_config` <a name="reset_manual_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```python
def reset_manual_lb_config() -> None
```

##### `reset_metal_lb_config` <a name="reset_metal_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```python
def reset_metal_lb_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config">f5_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig">manual_lb_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig">metal_lb_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig">vip_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput">f5_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">manual_lb_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput">metal_lb_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput">vip_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `f5_config`<sup>Required</sup> <a name="f5_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config"></a>

```python
f5_config: GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `manual_lb_config`<sup>Required</sup> <a name="manual_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```python
manual_lb_config: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `metal_lb_config`<sup>Required</sup> <a name="metal_lb_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```python
metal_lb_config: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `vip_config`<sup>Required</sup> <a name="vip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```python
vip_config: GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `f5_config_input`<sup>Optional</sup> <a name="f5_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```python
f5_config_input: GkeonpremVmwareAdminClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `manual_lb_config_input`<sup>Optional</sup> <a name="manual_lb_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```python
manual_lb_config_input: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `metal_lb_config_input`<sup>Optional</sup> <a name="metal_lb_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```python
metal_lb_config_input: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `vip_config_input`<sup>Optional</sup> <a name="vip_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```python
vip_config_input: GkeonpremVmwareAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip">reset_addons_vip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_addons_vip` <a name="reset_addons_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip"></a>

```python
def reset_addons_vip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput">addons_vip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">control_plane_vip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip">addons_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">control_plane_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addons_vip_input`<sup>Optional</sup> <a name="addons_vip_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput"></a>

```python
addons_vip_input: str
```

- *Type:* str

---

##### `control_plane_vip_input`<sup>Optional</sup> <a name="control_plane_vip_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```python
control_plane_vip_input: str
```

- *Type:* str

---

##### `addons_vip`<sup>Required</sup> <a name="addons_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip"></a>

```python
addons_vip: str
```

- *Type:* str

---

##### `control_plane_vip`<sup>Required</sup> <a name="control_plane_vip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```python
control_plane_vip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps">put_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ips` <a name="put_ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps"></a>

```python
def put_ips(
  value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```python
ips: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a>

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```python
ips_input: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock">put_control_plane_ip_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock">reset_control_plane_ip_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_control_plane_ip_block` <a name="put_control_plane_ip_block" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock"></a>

```python
def put_control_plane_ip_block(
  gateway: str,
  ips: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps]],
  netmask: str
) -> None
```

###### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock.parameter.gateway"></a>

- *Type:* str

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

###### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock.parameter.ips"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>]]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

###### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock.parameter.netmask"></a>

- *Type:* str

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

##### `reset_control_plane_ip_block` <a name="reset_control_plane_ip_block" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock"></a>

```python
def reset_control_plane_ip_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock">control_plane_ip_block</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput">control_plane_ip_block_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `control_plane_ip_block`<sup>Required</sup> <a name="control_plane_ip_block" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock"></a>

```python
control_plane_ip_block: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a>

---

##### `control_plane_ip_block_input`<sup>Optional</sup> <a name="control_plane_ip_block_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```python
control_plane_ip_block_input: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">reset_dns_search_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers">reset_ntp_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_search_domains` <a name="reset_dns_search_domains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```python
def reset_dns_search_domains() -> None
```

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_ntp_servers` <a name="reset_ntp_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```python
def reset_ntp_servers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">dns_search_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">ntp_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">dns_search_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_search_domains_input`<sup>Optional</sup> <a name="dns_search_domains_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```python
dns_search_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ntp_servers_input`<sup>Optional</sup> <a name="ntp_servers_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```python
ntp_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_search_domains`<sup>Required</sup> <a name="dns_search_domains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```python
dns_search_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ntp_servers`<sup>Required</sup> <a name="ntp_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```python
ntp_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig">put_dhcp_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig">put_ha_control_plane_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig">put_host_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig">put_static_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig">reset_dhcp_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig">reset_ha_control_plane_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig">reset_host_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig">reset_static_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork">reset_vcenter_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dhcp_ip_config` <a name="put_dhcp_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```python
def put_dhcp_ip_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

##### `put_ha_control_plane_config` <a name="put_ha_control_plane_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig"></a>

```python
def put_ha_control_plane_config(
  control_plane_ip_block: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock = None
) -> None
```

###### `control_plane_ip_block`<sup>Optional</sup> <a name="control_plane_ip_block" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig.parameter.controlPlaneIpBlock"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_ip_block GkeonpremVmwareAdminCluster#control_plane_ip_block}

---

##### `put_host_config` <a name="put_host_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig"></a>

```python
def put_host_config(
  dns_search_domains: typing.List[str] = None,
  dns_servers: typing.List[str] = None,
  ntp_servers: typing.List[str] = None
) -> None
```

###### `dns_search_domains`<sup>Optional</sup> <a name="dns_search_domains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig.parameter.dnsSearchDomains"></a>

- *Type:* typing.List[str]

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#dns_search_domains GkeonpremVmwareAdminCluster#dns_search_domains}

---

###### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig.parameter.dnsServers"></a>

- *Type:* typing.List[str]

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#dns_servers GkeonpremVmwareAdminCluster#dns_servers}

---

###### `ntp_servers`<sup>Optional</sup> <a name="ntp_servers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig.parameter.ntpServers"></a>

- *Type:* typing.List[str]

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ntp_servers GkeonpremVmwareAdminCluster#ntp_servers}

---

##### `put_static_ip_config` <a name="put_static_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```python
def put_static_ip_config(
  ip_blocks: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]] = None
) -> None
```

###### `ip_blocks`<sup>Optional</sup> <a name="ip_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.ipBlocks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_vmware_admin_cluster#ip_blocks GkeonpremVmwareAdminCluster#ip_blocks}

---

##### `reset_dhcp_ip_config` <a name="reset_dhcp_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```python
def reset_dhcp_ip_config() -> None
```

##### `reset_ha_control_plane_config` <a name="reset_ha_control_plane_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig"></a>

```python
def reset_ha_control_plane_config() -> None
```

##### `reset_host_config` <a name="reset_host_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig"></a>

```python
def reset_host_config() -> None
```

##### `reset_static_ip_config` <a name="reset_static_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```python
def reset_static_ip_config() -> None
```

##### `reset_vcenter_network` <a name="reset_vcenter_network" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```python
def reset_vcenter_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig">dhcp_ip_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig">ha_control_plane_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig">host_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig">static_ip_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">dhcp_ip_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput">ha_control_plane_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput">host_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">pod_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">service_address_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput">static_ip_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput">vcenter_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">pod_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">service_address_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork">vcenter_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dhcp_ip_config`<sup>Required</sup> <a name="dhcp_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```python
dhcp_ip_config: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `ha_control_plane_config`<sup>Required</sup> <a name="ha_control_plane_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig"></a>

```python
ha_control_plane_config: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a>

---

##### `host_config`<sup>Required</sup> <a name="host_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig"></a>

```python
host_config: GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a>

---

##### `static_ip_config`<sup>Required</sup> <a name="static_ip_config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```python
static_ip_config: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `dhcp_ip_config_input`<sup>Optional</sup> <a name="dhcp_ip_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```python
dhcp_ip_config_input: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `ha_control_plane_config_input`<sup>Optional</sup> <a name="ha_control_plane_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput"></a>

```python
ha_control_plane_config_input: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `host_config_input`<sup>Optional</sup> <a name="host_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```python
host_config_input: GkeonpremVmwareAdminClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `pod_address_cidr_blocks_input`<sup>Optional</sup> <a name="pod_address_cidr_blocks_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```python
pod_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks_input`<sup>Optional</sup> <a name="service_address_cidr_blocks_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```python
service_address_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `static_ip_config_input`<sup>Optional</sup> <a name="static_ip_config_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```python
static_ip_config_input: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `vcenter_network_input`<sup>Optional</sup> <a name="vcenter_network_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```python
vcenter_network_input: str
```

- *Type:* str

---

##### `pod_address_cidr_blocks`<sup>Required</sup> <a name="pod_address_cidr_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```python
pod_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_address_cidr_blocks`<sup>Required</sup> <a name="service_address_cidr_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```python
service_address_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcenter_network`<sup>Required</sup> <a name="vcenter_network" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```python
vcenter_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">put_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ips` <a name="put_ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```python
def put_ips(
  value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```python
ips: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```python
ips_input: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>]]

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">put_ip_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks">reset_ip_blocks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_blocks` <a name="put_ip_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```python
def put_ip_blocks(
  value: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]

---

##### `reset_ip_blocks` <a name="reset_ip_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks"></a>

```python
def reset_ip_blocks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">ip_blocks</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">ip_blocks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_blocks`<sup>Required</sup> <a name="ip_blocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```python
ip_blocks: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `ip_blocks_input`<sup>Optional</sup> <a name="ip_blocks_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```python
ip_blocks_input: typing.Union[IResolvable, typing.List[GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles">GkeonpremVmwareAdminClusterPlatformConfigBundles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status"></a>

```python
status: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPlatformConfigBundles
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles">GkeonpremVmwareAdminClusterPlatformConfigBundles</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions"></a>

```python
conditions: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion">reset_required_platform_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_required_platform_version` <a name="reset_required_platform_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion"></a>

```python
def reset_required_platform_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles">bundles</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList">GkeonpremVmwareAdminClusterPlatformConfigBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList">GkeonpremVmwareAdminClusterPlatformConfigStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput">required_platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion">required_platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundles`<sup>Required</sup> <a name="bundles" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles"></a>

```python
bundles: GkeonpremVmwareAdminClusterPlatformConfigBundlesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList">GkeonpremVmwareAdminClusterPlatformConfigBundlesList</a>

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status"></a>

```python
status: GkeonpremVmwareAdminClusterPlatformConfigStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList">GkeonpremVmwareAdminClusterPlatformConfigStatusList</a>

---

##### `required_platform_version_input`<sup>Optional</sup> <a name="required_platform_version_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput"></a>

```python
required_platform_version_input: str
```

- *Type:* str

---

##### `required_platform_version`<sup>Required</sup> <a name="required_platform_version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion"></a>

```python
required_platform_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPlatformConfigStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusList <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus">GkeonpremVmwareAdminClusterPlatformConfigStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions"></a>

```python
conditions: GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPlatformConfigStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus">GkeonpremVmwareAdminClusterPlatformConfigStatus</a>

---


### GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference <a name="GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetCaCert">reset_ca_cert</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_ca_cert` <a name="reset_ca_cert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetCaCert"></a>

```python
def reset_ca_cert() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCertInput">ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCert">ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `ca_cert_input`<sup>Optional</sup> <a name="ca_cert_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCertInput"></a>

```python
ca_cert_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `ca_cert`<sup>Required</sup> <a name="ca_cert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterPrivateRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---


### GkeonpremVmwareAdminClusterStatusConditionsList <a name="GkeonpremVmwareAdminClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions">GkeonpremVmwareAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions">GkeonpremVmwareAdminClusterStatusConditions</a>

---


### GkeonpremVmwareAdminClusterStatusList <a name="GkeonpremVmwareAdminClusterStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremVmwareAdminClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremVmwareAdminClusterStatusOutputReference <a name="GkeonpremVmwareAdminClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList">GkeonpremVmwareAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus">GkeonpremVmwareAdminClusterStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.conditions"></a>

```python
conditions: GkeonpremVmwareAdminClusterStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList">GkeonpremVmwareAdminClusterStatusConditionsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus">GkeonpremVmwareAdminClusterStatus</a>

---


### GkeonpremVmwareAdminClusterTimeoutsOutputReference <a name="GkeonpremVmwareAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremVmwareAdminClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>]

---


### GkeonpremVmwareAdminClusterVcenterOutputReference <a name="GkeonpremVmwareAdminClusterVcenterOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_vmware_admin_cluster

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData">reset_ca_cert_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk">reset_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore">reset_datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool">reset_resource_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName">reset_storage_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_ca_cert_data` <a name="reset_ca_cert_data" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData"></a>

```python
def reset_ca_cert_data() -> None
```

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_data_disk` <a name="reset_data_disk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk"></a>

```python
def reset_data_disk() -> None
```

##### `reset_datastore` <a name="reset_datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore"></a>

```python
def reset_datastore() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_resource_pool` <a name="reset_resource_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool"></a>

```python
def reset_resource_pool() -> None
```

##### `reset_storage_policy_name` <a name="reset_storage_policy_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName"></a>

```python
def reset_storage_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput">ca_cert_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput">data_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput">datastore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput">resource_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput">storage_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData">ca_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk">data_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore">datastore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool">resource_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName">storage_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `ca_cert_data_input`<sup>Optional</sup> <a name="ca_cert_data_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput"></a>

```python
ca_cert_data_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `data_disk_input`<sup>Optional</sup> <a name="data_disk_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput"></a>

```python
data_disk_input: str
```

- *Type:* str

---

##### `datastore_input`<sup>Optional</sup> <a name="datastore_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput"></a>

```python
datastore_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `resource_pool_input`<sup>Optional</sup> <a name="resource_pool_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput"></a>

```python
resource_pool_input: str
```

- *Type:* str

---

##### `storage_policy_name_input`<sup>Optional</sup> <a name="storage_policy_name_input" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```python
storage_policy_name_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `ca_cert_data`<sup>Required</sup> <a name="ca_cert_data" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData"></a>

```python
ca_cert_data: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk"></a>

```python
data_disk: str
```

- *Type:* str

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore"></a>

```python
datastore: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `resource_pool`<sup>Required</sup> <a name="resource_pool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool"></a>

```python
resource_pool: str
```

- *Type:* str

---

##### `storage_policy_name`<sup>Required</sup> <a name="storage_policy_name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName"></a>

```python
storage_policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremVmwareAdminClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---



