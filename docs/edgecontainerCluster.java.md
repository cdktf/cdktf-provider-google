# `edgecontainerCluster` Submodule <a name="`edgecontainerCluster` Submodule" id="@cdktf/provider-google.edgecontainerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerCluster <a name="EdgecontainerCluster" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster google_edgecontainer_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerCluster;

EdgecontainerCluster.Builder.create(Construct scope, java.lang.String id)
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
    .authorization(EdgecontainerClusterAuthorization)
    .fleet(EdgecontainerClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .networking(EdgecontainerClusterNetworking)
//  .controlPlane(EdgecontainerClusterControlPlane)
//  .controlPlaneEncryption(EdgecontainerClusterControlPlaneEncryption)
//  .defaultMaxPodsPerNode(java.lang.Number)
//  .externalLoadBalancerIpv4AddressPools(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(EdgecontainerClusterMaintenancePolicy)
//  .project(java.lang.String)
//  .releaseChannel(java.lang.String)
//  .systemAddonsConfig(EdgecontainerClusterSystemAddonsConfig)
//  .targetVersion(java.lang.String)
//  .timeouts(EdgecontainerClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.controlPlaneEncryption">controlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.defaultMaxPodsPerNode">defaultMaxPodsPerNode</a></code> | <code>java.lang.Number</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.externalLoadBalancerIpv4AddressPools">externalLoadBalancerIpv4AddressPools</a></code> | <code>java.util.List<java.lang.String></code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.systemAddonsConfig">systemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#authorization EdgecontainerCluster#authorization}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#fleet EdgecontainerCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#location EdgecontainerCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#name EdgecontainerCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#networking EdgecontainerCluster#networking}

---

##### `controlPlane`<sup>Optional</sup> <a name="controlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#control_plane EdgecontainerCluster#control_plane}

---

##### `controlPlaneEncryption`<sup>Optional</sup> <a name="controlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.controlPlaneEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#control_plane_encryption EdgecontainerCluster#control_plane_encryption}

---

##### `defaultMaxPodsPerNode`<sup>Optional</sup> <a name="defaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.defaultMaxPodsPerNode"></a>

- *Type:* java.lang.Number

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#default_max_pods_per_node EdgecontainerCluster#default_max_pods_per_node}

---

##### `externalLoadBalancerIpv4AddressPools`<sup>Optional</sup> <a name="externalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.externalLoadBalancerIpv4AddressPools"></a>

- *Type:* java.util.List<java.lang.String>

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#external_load_balancer_ipv4_address_pools EdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#labels EdgecontainerCluster#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#maintenance_policy EdgecontainerCluster#maintenance_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.releaseChannel"></a>

- *Type:* java.lang.String

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#release_channel EdgecontainerCluster#release_channel}

---

##### `systemAddonsConfig`<sup>Optional</sup> <a name="systemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.systemAddonsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#system_addons_config EdgecontainerCluster#system_addons_config}

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.targetVersion"></a>

- *Type:* java.lang.String

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#target_version EdgecontainerCluster#target_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#timeouts EdgecontainerCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption">putControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig">putSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlane">resetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlaneEncryption">resetControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetDefaultMaxPodsPerNode">resetDefaultMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools">resetExternalLoadBalancerIpv4AddressPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetReleaseChannel">resetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetSystemAddonsConfig">resetSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTargetVersion">resetTargetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization"></a>

```java
public void putAuthorization(EdgecontainerClusterAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane"></a>

```java
public void putControlPlane(EdgecontainerClusterControlPlane value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---

##### `putControlPlaneEncryption` <a name="putControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption"></a>

```java
public void putControlPlaneEncryption(EdgecontainerClusterControlPlaneEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet"></a>

```java
public void putFleet(EdgecontainerClusterFleet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(EdgecontainerClusterMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking"></a>

```java
public void putNetworking(EdgecontainerClusterNetworking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---

##### `putSystemAddonsConfig` <a name="putSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig"></a>

```java
public void putSystemAddonsConfig(EdgecontainerClusterSystemAddonsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts"></a>

```java
public void putTimeouts(EdgecontainerClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

---

##### `resetControlPlane` <a name="resetControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlane"></a>

```java
public void resetControlPlane()
```

##### `resetControlPlaneEncryption` <a name="resetControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlaneEncryption"></a>

```java
public void resetControlPlaneEncryption()
```

##### `resetDefaultMaxPodsPerNode` <a name="resetDefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetDefaultMaxPodsPerNode"></a>

```java
public void resetDefaultMaxPodsPerNode()
```

##### `resetExternalLoadBalancerIpv4AddressPools` <a name="resetExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools"></a>

```java
public void resetExternalLoadBalancerIpv4AddressPools()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetReleaseChannel` <a name="resetReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetReleaseChannel"></a>

```java
public void resetReleaseChannel()
```

##### `resetSystemAddonsConfig` <a name="resetSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetSystemAddonsConfig"></a>

```java
public void resetSystemAddonsConfig()
```

##### `resetTargetVersion` <a name="resetTargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTargetVersion"></a>

```java
public void resetTargetVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EdgecontainerCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerCluster;

EdgecontainerCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerCluster;

EdgecontainerCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerCluster;

EdgecontainerCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerCluster;

EdgecontainerCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EdgecontainerCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EdgecontainerCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EdgecontainerCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EdgecontainerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference">EdgecontainerClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference">EdgecontainerClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryption">controlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference">EdgecontainerClusterControlPlaneEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneVersion">controlPlaneVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference">EdgecontainerClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenanceEvents">maintenanceEvents</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList">EdgecontainerClusterMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference">EdgecontainerClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference">EdgecontainerClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nodeVersion">nodeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfig">systemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference">EdgecontainerClusterSystemAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference">EdgecontainerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryptionInput">controlPlaneEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNodeInput">defaultMaxPodsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput">externalLoadBalancerIpv4AddressPoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networkingInput">networkingInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannelInput">releaseChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfigInput">systemAddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersionInput">targetVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNode">defaultMaxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools">externalLoadBalancerIpv4AddressPools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorization"></a>

```java
public EdgecontainerClusterAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference">EdgecontainerClusterAuthorizationOutputReference</a>

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlane"></a>

```java
public EdgecontainerClusterControlPlaneOutputReference getControlPlane();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference">EdgecontainerClusterControlPlaneOutputReference</a>

---

##### `controlPlaneEncryption`<sup>Required</sup> <a name="controlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryption"></a>

```java
public EdgecontainerClusterControlPlaneEncryptionOutputReference getControlPlaneEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference">EdgecontainerClusterControlPlaneEncryptionOutputReference</a>

---

##### `controlPlaneVersion`<sup>Required</sup> <a name="controlPlaneVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneVersion"></a>

```java
public java.lang.String getControlPlaneVersion();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleet"></a>

```java
public EdgecontainerClusterFleetOutputReference getFleet();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference">EdgecontainerClusterFleetOutputReference</a>

---

##### `maintenanceEvents`<sup>Required</sup> <a name="maintenanceEvents" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenanceEvents"></a>

```java
public EdgecontainerClusterMaintenanceEventsList getMaintenanceEvents();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList">EdgecontainerClusterMaintenanceEventsList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicy"></a>

```java
public EdgecontainerClusterMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference">EdgecontainerClusterMaintenancePolicyOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networking"></a>

```java
public EdgecontainerClusterNetworkingOutputReference getNetworking();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference">EdgecontainerClusterNetworkingOutputReference</a>

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nodeVersion"></a>

```java
public java.lang.String getNodeVersion();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemAddonsConfig`<sup>Required</sup> <a name="systemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfig"></a>

```java
public EdgecontainerClusterSystemAddonsConfigOutputReference getSystemAddonsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference">EdgecontainerClusterSystemAddonsConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeouts"></a>

```java
public EdgecontainerClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference">EdgecontainerClusterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorizationInput"></a>

```java
public EdgecontainerClusterAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---

##### `controlPlaneEncryptionInput`<sup>Optional</sup> <a name="controlPlaneEncryptionInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryptionInput"></a>

```java
public EdgecontainerClusterControlPlaneEncryption getControlPlaneEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneInput"></a>

```java
public EdgecontainerClusterControlPlane getControlPlaneInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---

##### `defaultMaxPodsPerNodeInput`<sup>Optional</sup> <a name="defaultMaxPodsPerNodeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNodeInput"></a>

```java
public java.lang.Number getDefaultMaxPodsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `externalLoadBalancerIpv4AddressPoolsInput`<sup>Optional</sup> <a name="externalLoadBalancerIpv4AddressPoolsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput"></a>

```java
public java.util.List<java.lang.String> getExternalLoadBalancerIpv4AddressPoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleetInput"></a>

```java
public EdgecontainerClusterFleet getFleetInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicyInput"></a>

```java
public EdgecontainerClusterMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networkingInput"></a>

```java
public EdgecontainerClusterNetworking getNetworkingInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `releaseChannelInput`<sup>Optional</sup> <a name="releaseChannelInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannelInput"></a>

```java
public java.lang.String getReleaseChannelInput();
```

- *Type:* java.lang.String

---

##### `systemAddonsConfigInput`<sup>Optional</sup> <a name="systemAddonsConfigInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfigInput"></a>

```java
public EdgecontainerClusterSystemAddonsConfig getSystemAddonsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersionInput"></a>

```java
public java.lang.String getTargetVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

---

##### `defaultMaxPodsPerNode`<sup>Required</sup> <a name="defaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNode"></a>

```java
public java.lang.Number getDefaultMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `externalLoadBalancerIpv4AddressPools`<sup>Required</sup> <a name="externalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools"></a>

```java
public java.util.List<java.lang.String> getExternalLoadBalancerIpv4AddressPools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerClusterAuthorization <a name="EdgecontainerClusterAuthorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterAuthorization;

EdgecontainerClusterAuthorization.builder()
    .adminUsers(EdgecontainerClusterAuthorizationAdminUsers)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | admin_users block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.property.adminUsers"></a>

```java
public EdgecontainerClusterAuthorizationAdminUsers getAdminUsers();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#admin_users EdgecontainerCluster#admin_users}

---

### EdgecontainerClusterAuthorizationAdminUsers <a name="EdgecontainerClusterAuthorizationAdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterAuthorizationAdminUsers;

EdgecontainerClusterAuthorizationAdminUsers.builder()
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>java.lang.String</code> | An active Google username. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#username EdgecontainerCluster#username}

---

### EdgecontainerClusterConfig <a name="EdgecontainerClusterConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterConfig;

EdgecontainerClusterConfig.builder()
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
    .authorization(EdgecontainerClusterAuthorization)
    .fleet(EdgecontainerClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .networking(EdgecontainerClusterNetworking)
//  .controlPlane(EdgecontainerClusterControlPlane)
//  .controlPlaneEncryption(EdgecontainerClusterControlPlaneEncryption)
//  .defaultMaxPodsPerNode(java.lang.Number)
//  .externalLoadBalancerIpv4AddressPools(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(EdgecontainerClusterMaintenancePolicy)
//  .project(java.lang.String)
//  .releaseChannel(java.lang.String)
//  .systemAddonsConfig(EdgecontainerClusterSystemAddonsConfig)
//  .targetVersion(java.lang.String)
//  .timeouts(EdgecontainerClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlaneEncryption">controlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.defaultMaxPodsPerNode">defaultMaxPodsPerNode</a></code> | <code>java.lang.Number</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools">externalLoadBalancerIpv4AddressPools</a></code> | <code>java.util.List<java.lang.String></code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.systemAddonsConfig">systemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.authorization"></a>

```java
public EdgecontainerClusterAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#authorization EdgecontainerCluster#authorization}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.fleet"></a>

```java
public EdgecontainerClusterFleet getFleet();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#fleet EdgecontainerCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#location EdgecontainerCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#name EdgecontainerCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.networking"></a>

```java
public EdgecontainerClusterNetworking getNetworking();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#networking EdgecontainerCluster#networking}

---

##### `controlPlane`<sup>Optional</sup> <a name="controlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlane"></a>

```java
public EdgecontainerClusterControlPlane getControlPlane();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#control_plane EdgecontainerCluster#control_plane}

---

##### `controlPlaneEncryption`<sup>Optional</sup> <a name="controlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlaneEncryption"></a>

```java
public EdgecontainerClusterControlPlaneEncryption getControlPlaneEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#control_plane_encryption EdgecontainerCluster#control_plane_encryption}

---

##### `defaultMaxPodsPerNode`<sup>Optional</sup> <a name="defaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.defaultMaxPodsPerNode"></a>

```java
public java.lang.Number getDefaultMaxPodsPerNode();
```

- *Type:* java.lang.Number

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#default_max_pods_per_node EdgecontainerCluster#default_max_pods_per_node}

---

##### `externalLoadBalancerIpv4AddressPools`<sup>Optional</sup> <a name="externalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools"></a>

```java
public java.util.List<java.lang.String> getExternalLoadBalancerIpv4AddressPools();
```

- *Type:* java.util.List<java.lang.String>

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#external_load_balancer_ipv4_address_pools EdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#labels EdgecontainerCluster#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.maintenancePolicy"></a>

```java
public EdgecontainerClusterMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#maintenance_policy EdgecontainerCluster#maintenance_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#release_channel EdgecontainerCluster#release_channel}

---

##### `systemAddonsConfig`<sup>Optional</sup> <a name="systemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.systemAddonsConfig"></a>

```java
public EdgecontainerClusterSystemAddonsConfig getSystemAddonsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#system_addons_config EdgecontainerCluster#system_addons_config}

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#target_version EdgecontainerCluster#target_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.timeouts"></a>

```java
public EdgecontainerClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#timeouts EdgecontainerCluster#timeouts}

---

### EdgecontainerClusterControlPlane <a name="EdgecontainerClusterControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlane;

EdgecontainerClusterControlPlane.builder()
//  .local(EdgecontainerClusterControlPlaneLocal)
//  .remote(EdgecontainerClusterControlPlaneRemote)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.local">local</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | remote block. |

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.local"></a>

```java
public EdgecontainerClusterControlPlaneLocal getLocal();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#local EdgecontainerCluster#local}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.remote"></a>

```java
public EdgecontainerClusterControlPlaneRemote getRemote();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#remote EdgecontainerCluster#remote}

---

### EdgecontainerClusterControlPlaneEncryption <a name="EdgecontainerClusterControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneEncryption;

EdgecontainerClusterControlPlaneEncryption.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#kms_key EdgecontainerCluster#kms_key}

---

### EdgecontainerClusterControlPlaneEncryptionKmsStatus <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatus" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus;

EdgecontainerClusterControlPlaneEncryptionKmsStatus.builder()
    .build();
```


### EdgecontainerClusterControlPlaneLocal <a name="EdgecontainerClusterControlPlaneLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneLocal;

EdgecontainerClusterControlPlaneLocal.builder()
//  .machineFilter(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .nodeLocation(java.lang.String)
//  .sharedDeploymentPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.machineFilter">machineFilter</a></code> | <code>java.lang.String</code> | Only machines matching this filter will be allowed to host control plane nodes. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy">sharedDeploymentPolicy</a></code> | <code>java.lang.String</code> | Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. |

---

##### `machineFilter`<sup>Optional</sup> <a name="machineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.machineFilter"></a>

```java
public java.lang.String getMachineFilter();
```

- *Type:* java.lang.String

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#machine_filter EdgecontainerCluster#machine_filter}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#node_count EdgecontainerCluster#node_count}

---

##### `nodeLocation`<sup>Optional</sup> <a name="nodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeLocation"></a>

```java
public java.lang.String getNodeLocation();
```

- *Type:* java.lang.String

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}

---

##### `sharedDeploymentPolicy`<sup>Optional</sup> <a name="sharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy"></a>

```java
public java.lang.String getSharedDeploymentPolicy();
```

- *Type:* java.lang.String

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#shared_deployment_policy EdgecontainerCluster#shared_deployment_policy}

---

### EdgecontainerClusterControlPlaneRemote <a name="EdgecontainerClusterControlPlaneRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneRemote;

EdgecontainerClusterControlPlaneRemote.builder()
//  .nodeLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.property.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |

---

##### `nodeLocation`<sup>Optional</sup> <a name="nodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.property.nodeLocation"></a>

```java
public java.lang.String getNodeLocation();
```

- *Type:* java.lang.String

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}

---

### EdgecontainerClusterFleet <a name="EdgecontainerClusterFleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterFleet;

EdgecontainerClusterFleet.builder()
    .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.property.project">project</a></code> | <code>java.lang.String</code> | The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}

---

### EdgecontainerClusterMaintenanceEvents <a name="EdgecontainerClusterMaintenanceEvents" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenanceEvents;

EdgecontainerClusterMaintenanceEvents.builder()
    .build();
```


### EdgecontainerClusterMaintenancePolicy <a name="EdgecontainerClusterMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicy;

EdgecontainerClusterMaintenancePolicy.builder()
    .window(EdgecontainerClusterMaintenancePolicyWindow)
//  .maintenanceExclusions(IResolvable)
//  .maintenanceExclusions(java.util.List<EdgecontainerClusterMaintenancePolicyMaintenanceExclusions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.window">window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | window block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions">maintenanceExclusions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>></code> | maintenance_exclusions block. |

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.window"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindow getWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

##### `maintenanceExclusions`<sup>Optional</sup> <a name="maintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions"></a>

```java
public java.lang.Object getMaintenanceExclusions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>>

maintenance_exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#maintenance_exclusions EdgecontainerCluster#maintenance_exclusions}

---

### EdgecontainerClusterMaintenancePolicyMaintenanceExclusions <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions;

EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.builder()
//  .id(java.lang.String)
//  .window(EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id">id</a></code> | <code>java.lang.String</code> | A unique (per cluster) id for the window. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window">window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | window block. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

A unique (per cluster) id for the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window"></a>

```java
public EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow getWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow;

EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.builder()
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time that the window first starts. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}

---

### EdgecontainerClusterMaintenancePolicyWindow <a name="EdgecontainerClusterMaintenancePolicyWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyWindow;

EdgecontainerClusterMaintenancePolicyWindow.builder()
    .recurringWindow(EdgecontainerClusterMaintenancePolicyWindowRecurringWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow">recurringWindow</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | recurring_window block. |

---

##### `recurringWindow`<sup>Required</sup> <a name="recurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindow getRecurringWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#recurring_window EdgecontainerCluster#recurring_window}

---

### EdgecontainerClusterMaintenancePolicyWindowRecurringWindow <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow;

EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.builder()
//  .recurrence(java.lang.String)
//  .window(EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window">window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | window block. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#recurrence EdgecontainerCluster#recurrence}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow getWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow;

EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.builder()
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time that the window first starts. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}

---

### EdgecontainerClusterNetworking <a name="EdgecontainerClusterNetworking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterNetworking;

EdgecontainerClusterNetworking.builder()
    .clusterIpv4CidrBlocks(java.util.List<java.lang.String>)
    .servicesIpv4CidrBlocks(java.util.List<java.lang.String>)
//  .clusterIpv6CidrBlocks(java.util.List<java.lang.String>)
//  .servicesIpv6CidrBlocks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks">clusterIpv4CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks">servicesIpv4CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | All services in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks">clusterIpv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks">servicesIpv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |

---

##### `clusterIpv4CidrBlocks`<sup>Required</sup> <a name="clusterIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getClusterIpv4CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#cluster_ipv4_cidr_blocks EdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

##### `servicesIpv4CidrBlocks`<sup>Required</sup> <a name="servicesIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServicesIpv4CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#services_ipv4_cidr_blocks EdgecontainerCluster#services_ipv4_cidr_blocks}

---

##### `clusterIpv6CidrBlocks`<sup>Optional</sup> <a name="clusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getClusterIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#cluster_ipv6_cidr_blocks EdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

##### `servicesIpv6CidrBlocks`<sup>Optional</sup> <a name="servicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServicesIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#services_ipv6_cidr_blocks EdgecontainerCluster#services_ipv6_cidr_blocks}

---

### EdgecontainerClusterSystemAddonsConfig <a name="EdgecontainerClusterSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterSystemAddonsConfig;

EdgecontainerClusterSystemAddonsConfig.builder()
//  .ingress(EdgecontainerClusterSystemAddonsConfigIngress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | ingress block. |

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.property.ingress"></a>

```java
public EdgecontainerClusterSystemAddonsConfigIngress getIngress();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#ingress EdgecontainerCluster#ingress}

---

### EdgecontainerClusterSystemAddonsConfigIngress <a name="EdgecontainerClusterSystemAddonsConfigIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterSystemAddonsConfigIngress;

EdgecontainerClusterSystemAddonsConfigIngress.builder()
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .ipv4Vip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Ingress is disabled. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip">ipv4Vip</a></code> | <code>java.lang.String</code> | Ingress VIP. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#disabled EdgecontainerCluster#disabled}

---

##### `ipv4Vip`<sup>Optional</sup> <a name="ipv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip"></a>

```java
public java.lang.String getIpv4Vip();
```

- *Type:* java.lang.String

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#ipv4_vip EdgecontainerCluster#ipv4_vip}

---

### EdgecontainerClusterTimeouts <a name="EdgecontainerClusterTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterTimeouts;

EdgecontainerClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerClusterAuthorizationAdminUsersOutputReference <a name="EdgecontainerClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference;

new EdgecontainerClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterAuthorizationAdminUsers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---


### EdgecontainerClusterAuthorizationOutputReference <a name="EdgecontainerClusterAuthorizationOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterAuthorizationOutputReference;

new EdgecontainerClusterAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers"></a>

```java
public void putAdminUsers(EdgecontainerClusterAuthorizationAdminUsers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference">EdgecontainerClusterAuthorizationAdminUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsers"></a>

```java
public EdgecontainerClusterAuthorizationAdminUsersOutputReference getAdminUsers();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference">EdgecontainerClusterAuthorizationAdminUsersOutputReference</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```java
public EdgecontainerClusterAuthorizationAdminUsers getAdminUsersInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---


### EdgecontainerClusterControlPlaneEncryptionKmsStatusList <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatusList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList;

new EdgecontainerClusterControlPlaneEncryptionKmsStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get"></a>

```java
public EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference;

new EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus">EdgecontainerClusterControlPlaneEncryptionKmsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterControlPlaneEncryptionKmsStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus">EdgecontainerClusterControlPlaneEncryptionKmsStatus</a>

---


### EdgecontainerClusterControlPlaneEncryptionOutputReference <a name="EdgecontainerClusterControlPlaneEncryptionOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneEncryptionOutputReference;

new EdgecontainerClusterControlPlaneEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion">kmsKeyActiveVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus">kmsStatus</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList">EdgecontainerClusterControlPlaneEncryptionKmsStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyActiveVersion`<sup>Required</sup> <a name="kmsKeyActiveVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```java
public java.lang.String getKmsKeyActiveVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState"></a>

```java
public java.lang.String getKmsKeyState();
```

- *Type:* java.lang.String

---

##### `kmsStatus`<sup>Required</sup> <a name="kmsStatus" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus"></a>

```java
public EdgecontainerClusterControlPlaneEncryptionKmsStatusList getKmsStatus();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList">EdgecontainerClusterControlPlaneEncryptionKmsStatusList</a>

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterControlPlaneEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---


### EdgecontainerClusterControlPlaneLocalOutputReference <a name="EdgecontainerClusterControlPlaneLocalOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneLocalOutputReference;

new EdgecontainerClusterControlPlaneLocalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter">resetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation">resetNodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy">resetSharedDeploymentPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineFilter` <a name="resetMachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter"></a>

```java
public void resetMachineFilter()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetNodeLocation` <a name="resetNodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation"></a>

```java
public void resetNodeLocation()
```

##### `resetSharedDeploymentPolicy` <a name="resetSharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy"></a>

```java
public void resetSharedDeploymentPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput">machineFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput">nodeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput">sharedDeploymentPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter">machineFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy">sharedDeploymentPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineFilterInput`<sup>Optional</sup> <a name="machineFilterInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput"></a>

```java
public java.lang.String getMachineFilterInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeLocationInput`<sup>Optional</sup> <a name="nodeLocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput"></a>

```java
public java.lang.String getNodeLocationInput();
```

- *Type:* java.lang.String

---

##### `sharedDeploymentPolicyInput`<sup>Optional</sup> <a name="sharedDeploymentPolicyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput"></a>

```java
public java.lang.String getSharedDeploymentPolicyInput();
```

- *Type:* java.lang.String

---

##### `machineFilter`<sup>Required</sup> <a name="machineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter"></a>

```java
public java.lang.String getMachineFilter();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation"></a>

```java
public java.lang.String getNodeLocation();
```

- *Type:* java.lang.String

---

##### `sharedDeploymentPolicy`<sup>Required</sup> <a name="sharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy"></a>

```java
public java.lang.String getSharedDeploymentPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterControlPlaneLocal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---


### EdgecontainerClusterControlPlaneOutputReference <a name="EdgecontainerClusterControlPlaneOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneOutputReference;

new EdgecontainerClusterControlPlaneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal">putLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote">putRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetRemote">resetRemote</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocal` <a name="putLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal"></a>

```java
public void putLocal(EdgecontainerClusterControlPlaneLocal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---

##### `putRemote` <a name="putRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote"></a>

```java
public void putRemote(EdgecontainerClusterControlPlaneRemote value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetRemote` <a name="resetRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetRemote"></a>

```java
public void resetRemote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference">EdgecontainerClusterControlPlaneLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference">EdgecontainerClusterControlPlaneRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.localInput">localInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remoteInput">remoteInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.local"></a>

```java
public EdgecontainerClusterControlPlaneLocalOutputReference getLocal();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference">EdgecontainerClusterControlPlaneLocalOutputReference</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remote"></a>

```java
public EdgecontainerClusterControlPlaneRemoteOutputReference getRemote();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference">EdgecontainerClusterControlPlaneRemoteOutputReference</a>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.localInput"></a>

```java
public EdgecontainerClusterControlPlaneLocal getLocalInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---

##### `remoteInput`<sup>Optional</sup> <a name="remoteInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remoteInput"></a>

```java
public EdgecontainerClusterControlPlaneRemote getRemoteInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterControlPlane getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---


### EdgecontainerClusterControlPlaneRemoteOutputReference <a name="EdgecontainerClusterControlPlaneRemoteOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterControlPlaneRemoteOutputReference;

new EdgecontainerClusterControlPlaneRemoteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation">resetNodeLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeLocation` <a name="resetNodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation"></a>

```java
public void resetNodeLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput">nodeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeLocationInput`<sup>Optional</sup> <a name="nodeLocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput"></a>

```java
public java.lang.String getNodeLocationInput();
```

- *Type:* java.lang.String

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation"></a>

```java
public java.lang.String getNodeLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterControlPlaneRemote getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---


### EdgecontainerClusterFleetOutputReference <a name="EdgecontainerClusterFleetOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterFleetOutputReference;

new EdgecontainerClusterFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---


### EdgecontainerClusterMaintenanceEventsList <a name="EdgecontainerClusterMaintenanceEventsList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenanceEventsList;

new EdgecontainerClusterMaintenanceEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get"></a>

```java
public EdgecontainerClusterMaintenanceEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EdgecontainerClusterMaintenanceEventsOutputReference <a name="EdgecontainerClusterMaintenanceEventsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenanceEventsOutputReference;

new EdgecontainerClusterMaintenanceEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents">EdgecontainerClusterMaintenanceEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterMaintenanceEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents">EdgecontainerClusterMaintenanceEvents</a>

---


### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList;

new EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get"></a>

```java
public EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>>

---


### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference;

new EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindow` <a name="putWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow"></a>

```java
public void putWindow(EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow"></a>

```java
public void resetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window"></a>

```java
public EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference getWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput"></a>

```java
public EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow getWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>

---


### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference;

new EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---


### EdgecontainerClusterMaintenancePolicyOutputReference <a name="EdgecontainerClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyOutputReference;

new EdgecontainerClusterMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions">putMaintenanceExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions">resetMaintenanceExclusions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceExclusions` <a name="putMaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions"></a>

```java
public void putMaintenanceExclusions(IResolvable OR java.util.List<EdgecontainerClusterMaintenancePolicyMaintenanceExclusions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>>

---

##### `putWindow` <a name="putWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow"></a>

```java
public void putWindow(EdgecontainerClusterMaintenancePolicyWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `resetMaintenanceExclusions` <a name="resetMaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions"></a>

```java
public void resetMaintenanceExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions">maintenanceExclusions</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput">maintenanceExclusionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceExclusions`<sup>Required</sup> <a name="maintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions"></a>

```java
public EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList getMaintenanceExclusions();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.window"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowOutputReference getWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowOutputReference</a>

---

##### `maintenanceExclusionsInput`<sup>Optional</sup> <a name="maintenanceExclusionsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput"></a>

```java
public java.lang.Object getMaintenanceExclusionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions">EdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>>

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindow getWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---


### EdgecontainerClusterMaintenancePolicyWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference;

new EdgecontainerClusterMaintenancePolicyWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow">putRecurringWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurringWindow` <a name="putRecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow"></a>

```java
public void putRecurringWindow(EdgecontainerClusterMaintenancePolicyWindowRecurringWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow">recurringWindow</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput">recurringWindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurringWindow`<sup>Required</sup> <a name="recurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference getRecurringWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a>

---

##### `recurringWindowInput`<sup>Optional</sup> <a name="recurringWindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindow getRecurringWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---


### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference;

new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindow` <a name="putWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow"></a>

```java
public void putWindow(EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence"></a>

```java
public void resetRecurrence()
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow"></a>

```java
public void resetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence">recurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference getWindow();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput"></a>

```java
public java.lang.String getRecurrenceInput();
```

- *Type:* java.lang.String

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow getWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence"></a>

```java
public java.lang.String getRecurrence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference;

new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---


### EdgecontainerClusterNetworkingOutputReference <a name="EdgecontainerClusterNetworkingOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterNetworkingOutputReference;

new EdgecontainerClusterNetworkingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks">resetClusterIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks">resetServicesIpv6CidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterIpv6CidrBlocks` <a name="resetClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks"></a>

```java
public void resetClusterIpv6CidrBlocks()
```

##### `resetServicesIpv6CidrBlocks` <a name="resetServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks"></a>

```java
public void resetServicesIpv6CidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput">clusterIpv4CidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput">clusterIpv6CidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput">servicesIpv4CidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput">servicesIpv6CidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks">clusterIpv4CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks">clusterIpv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks">servicesIpv4CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks">servicesIpv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `clusterIpv4CidrBlocksInput`<sup>Optional</sup> <a name="clusterIpv4CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getClusterIpv4CidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterIpv6CidrBlocksInput`<sup>Optional</sup> <a name="clusterIpv6CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getClusterIpv6CidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesIpv4CidrBlocksInput`<sup>Optional</sup> <a name="servicesIpv4CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getServicesIpv4CidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesIpv6CidrBlocksInput`<sup>Optional</sup> <a name="servicesIpv6CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getServicesIpv6CidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterIpv4CidrBlocks`<sup>Required</sup> <a name="clusterIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getClusterIpv4CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterIpv6CidrBlocks`<sup>Required</sup> <a name="clusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getClusterIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesIpv4CidrBlocks`<sup>Required</sup> <a name="servicesIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServicesIpv4CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesIpv6CidrBlocks`<sup>Required</sup> <a name="servicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServicesIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterNetworking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---


### EdgecontainerClusterSystemAddonsConfigIngressOutputReference <a name="EdgecontainerClusterSystemAddonsConfigIngressOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference;

new EdgecontainerClusterSystemAddonsConfigIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip">resetIpv4Vip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetIpv4Vip` <a name="resetIpv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip"></a>

```java
public void resetIpv4Vip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput">ipv4VipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip">ipv4Vip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv4VipInput`<sup>Optional</sup> <a name="ipv4VipInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput"></a>

```java
public java.lang.String getIpv4VipInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv4Vip`<sup>Required</sup> <a name="ipv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip"></a>

```java
public java.lang.String getIpv4Vip();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterSystemAddonsConfigIngress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---


### EdgecontainerClusterSystemAddonsConfigOutputReference <a name="EdgecontainerClusterSystemAddonsConfigOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterSystemAddonsConfigOutputReference;

new EdgecontainerClusterSystemAddonsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress">resetIngress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngress` <a name="putIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress"></a>

```java
public void putIngress(EdgecontainerClusterSystemAddonsConfigIngress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress"></a>

```java
public void resetIngress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference">EdgecontainerClusterSystemAddonsConfigIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput">ingressInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress"></a>

```java
public EdgecontainerClusterSystemAddonsConfigIngressOutputReference getIngress();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference">EdgecontainerClusterSystemAddonsConfigIngressOutputReference</a>

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput"></a>

```java
public EdgecontainerClusterSystemAddonsConfigIngress getIngressInput();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue"></a>

```java
public EdgecontainerClusterSystemAddonsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---


### EdgecontainerClusterTimeoutsOutputReference <a name="EdgecontainerClusterTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.edgecontainer_cluster.EdgecontainerClusterTimeoutsOutputReference;

new EdgecontainerClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

---



