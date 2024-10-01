# `computeRegionNetworkEndpointGroup` Submodule <a name="`computeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkEndpointGroup <a name="ComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroup;

ComputeRegionNetworkEndpointGroup.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .region(java.lang.String)
//  .appEngine(ComputeRegionNetworkEndpointGroupAppEngine)
//  .cloudFunction(ComputeRegionNetworkEndpointGroupCloudFunction)
//  .cloudRun(ComputeRegionNetworkEndpointGroupCloudRun)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .network(java.lang.String)
//  .networkEndpointType(java.lang.String)
//  .project(java.lang.String)
//  .pscTargetService(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(ComputeRegionNetworkEndpointGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.pscTargetService">pscTargetService</a></code> | <code>java.lang.String</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#name ComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#region ComputeRegionNetworkEndpointGroup#region}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.appEngine"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#app_engine ComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloudFunction`<sup>Optional</sup> <a name="cloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudFunction"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#cloud_function ComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloudRun`<sup>Optional</sup> <a name="cloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.cloudRun"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#cloud_run ComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#description ComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.network"></a>

- *Type:* java.lang.String

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#network ComputeRegionNetworkEndpointGroup#network}

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* java.lang.String

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#network_endpoint_type ComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}.

---

##### `pscTargetService`<sup>Optional</sup> <a name="pscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.pscTargetService"></a>

- *Type:* java.lang.String

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#psc_target_service ComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#subnetwork ComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#timeouts ComputeRegionNetworkEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine">putAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction">putCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun">putCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetAppEngine">resetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudFunction">resetCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudRun">resetCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetworkEndpointType">resetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscTargetService">resetPscTargetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngine` <a name="putAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine"></a>

```java
public void putAppEngine(ComputeRegionNetworkEndpointGroupAppEngine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `putCloudFunction` <a name="putCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction"></a>

```java
public void putCloudFunction(ComputeRegionNetworkEndpointGroupCloudFunction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `putCloudRun` <a name="putCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun"></a>

```java
public void putCloudRun(ComputeRegionNetworkEndpointGroupCloudRun value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionNetworkEndpointGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `resetAppEngine` <a name="resetAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetAppEngine"></a>

```java
public void resetAppEngine()
```

##### `resetCloudFunction` <a name="resetCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudFunction"></a>

```java
public void resetCloudFunction()
```

##### `resetCloudRun` <a name="resetCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudRun"></a>

```java
public void resetCloudRun()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetId"></a>

```java
public void resetId()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkEndpointType` <a name="resetNetworkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetworkEndpointType"></a>

```java
public void resetNetworkEndpointType()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetPscTargetService` <a name="resetPscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscTargetService"></a>

```java
public void resetPscTargetService()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroup;

ComputeRegionNetworkEndpointGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroup;

ComputeRegionNetworkEndpointGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroup;

ComputeRegionNetworkEndpointGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroup;

ComputeRegionNetworkEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionNetworkEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference">ComputeRegionNetworkEndpointGroupAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference">ComputeRegionNetworkEndpointGroupCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference">ComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngineInput">appEngineInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunctionInput">cloudFunctionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRunInput">cloudRunInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput">pscTargetServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetService">pscTargetService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appEngine`<sup>Required</sup> <a name="appEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```java
public ComputeRegionNetworkEndpointGroupAppEngineOutputReference getAppEngine();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference">ComputeRegionNetworkEndpointGroupAppEngineOutputReference</a>

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference getCloudFunction();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a>

---

##### `cloudRun`<sup>Required</sup> <a name="cloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudRunOutputReference getCloudRun();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference">ComputeRegionNetworkEndpointGroupCloudRunOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeouts"></a>

```java
public ComputeRegionNetworkEndpointGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference">ComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `appEngineInput`<sup>Optional</sup> <a name="appEngineInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngineInput"></a>

```java
public ComputeRegionNetworkEndpointGroupAppEngine getAppEngineInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `cloudFunctionInput`<sup>Optional</sup> <a name="cloudFunctionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunctionInput"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudFunction getCloudFunctionInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `cloudRunInput`<sup>Optional</sup> <a name="cloudRunInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRunInput"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudRun getCloudRunInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```java
public java.lang.String getNetworkEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pscTargetServiceInput`<sup>Optional</sup> <a name="pscTargetServiceInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput"></a>

```java
public java.lang.String getPscTargetServiceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pscTargetService`<sup>Required</sup> <a name="pscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```java
public java.lang.String getPscTargetService();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkEndpointGroupAppEngine <a name="ComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupAppEngine;

ComputeRegionNetworkEndpointGroupAppEngine.builder()
//  .service(java.lang.String)
//  .urlMask(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.service">service</a></code> | <code>java.lang.String</code> | Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.urlMask">urlMask</a></code> | <code>java.lang.String</code> | A template to parse service and version fields from a request URL. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.version">version</a></code> | <code>java.lang.String</code> | Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2". |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.urlMask"></a>

```java
public java.lang.String getUrlMask();
```

- *Type:* java.lang.String

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#version ComputeRegionNetworkEndpointGroup#version}

---

### ComputeRegionNetworkEndpointGroupCloudFunction <a name="ComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupCloudFunction;

ComputeRegionNetworkEndpointGroupCloudFunction.builder()
//  .function(java.lang.String)
//  .urlMask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.function">function</a></code> | <code>java.lang.String</code> | A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask">urlMask</a></code> | <code>java.lang.String</code> | A template to parse function field from a request URL. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#function ComputeRegionNetworkEndpointGroup#function}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask"></a>

```java
public java.lang.String getUrlMask();
```

- *Type:* java.lang.String

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

### ComputeRegionNetworkEndpointGroupCloudRun <a name="ComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupCloudRun;

ComputeRegionNetworkEndpointGroupCloudRun.builder()
//  .service(java.lang.String)
//  .tag(java.lang.String)
//  .urlMask(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.service">service</a></code> | <code>java.lang.String</code> | Cloud Run service is the main resource of Cloud Run. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.tag">tag</a></code> | <code>java.lang.String</code> | Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.urlMask">urlMask</a></code> | <code>java.lang.String</code> | A template to parse service and tag fields from a request URL. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#tag ComputeRegionNetworkEndpointGroup#tag}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.urlMask"></a>

```java
public java.lang.String getUrlMask();
```

- *Type:* java.lang.String

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

### ComputeRegionNetworkEndpointGroupConfig <a name="ComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupConfig;

ComputeRegionNetworkEndpointGroupConfig.builder()
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
    .name(java.lang.String)
    .region(java.lang.String)
//  .appEngine(ComputeRegionNetworkEndpointGroupAppEngine)
//  .cloudFunction(ComputeRegionNetworkEndpointGroupCloudFunction)
//  .cloudRun(ComputeRegionNetworkEndpointGroupCloudRun)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .network(java.lang.String)
//  .networkEndpointType(java.lang.String)
//  .project(java.lang.String)
//  .pscTargetService(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(ComputeRegionNetworkEndpointGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.network">network</a></code> | <code>java.lang.String</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscTargetService">pscTargetService</a></code> | <code>java.lang.String</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#name ComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#region ComputeRegionNetworkEndpointGroup#region}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.appEngine"></a>

```java
public ComputeRegionNetworkEndpointGroupAppEngine getAppEngine();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#app_engine ComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloudFunction`<sup>Optional</sup> <a name="cloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudFunction"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudFunction getCloudFunction();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#cloud_function ComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloudRun`<sup>Optional</sup> <a name="cloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudRun"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudRun getCloudRun();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#cloud_run ComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#description ComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#network ComputeRegionNetworkEndpointGroup#network}

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#network_endpoint_type ComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}.

---

##### `pscTargetService`<sup>Optional</sup> <a name="pscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscTargetService"></a>

```java
public java.lang.String getPscTargetService();
```

- *Type:* java.lang.String

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#psc_target_service ComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#subnetwork ComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.timeouts"></a>

```java
public ComputeRegionNetworkEndpointGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#timeouts ComputeRegionNetworkEndpointGroup#timeouts}

---

### ComputeRegionNetworkEndpointGroupTimeouts <a name="ComputeRegionNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupTimeouts;

ComputeRegionNetworkEndpointGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="ComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupAppEngineOutputReference;

new ComputeRegionNetworkEndpointGroupAppEngineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask"></a>

```java
public void resetUrlMask()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">urlMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput"></a>

```java
public java.lang.String getUrlMaskInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```java
public java.lang.String getUrlMask();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```java
public ComputeRegionNetworkEndpointGroupAppEngine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---


### ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference;

new ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction"></a>

```java
public void resetFunction()
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask"></a>

```java
public void resetUrlMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">urlMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput"></a>

```java
public java.lang.String getUrlMaskInput();
```

- *Type:* java.lang.String

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```java
public java.lang.String getUrlMask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudFunction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### ComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="ComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupCloudRunOutputReference;

new ComputeRegionNetworkEndpointGroupCloudRunOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag"></a>

```java
public void resetTag()
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask"></a>

```java
public void resetUrlMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">urlMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput"></a>

```java
public java.lang.String getUrlMaskInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```java
public java.lang.String getUrlMask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```java
public ComputeRegionNetworkEndpointGroupCloudRun getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---


### ComputeRegionNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeRegionNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_network_endpoint_group.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference;

new ComputeRegionNetworkEndpointGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

---



