# `vertexAiIndexEndpointDeployedIndex` Submodule <a name="`vertexAiIndexEndpointDeployedIndex` Submodule" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndexEndpointDeployedIndex <a name="VertexAiIndexEndpointDeployedIndex" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index google_vertex_ai_index_endpoint_deployed_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndex;

VertexAiIndexEndpointDeployedIndex.Builder.create(Construct scope, java.lang.String id)
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
    .deployedIndexId(java.lang.String)
    .index(java.lang.String)
    .indexEndpoint(java.lang.String)
//  .automaticResources(VertexAiIndexEndpointDeployedIndexAutomaticResources)
//  .dedicatedResources(VertexAiIndexEndpointDeployedIndexDedicatedResources)
//  .deployedIndexAuthConfig(VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig)
//  .deploymentGroup(java.lang.String)
//  .displayName(java.lang.String)
//  .enableAccessLogging(java.lang.Boolean)
//  .enableAccessLogging(IResolvable)
//  .id(java.lang.String)
//  .reservedIpRanges(java.util.List<java.lang.String>)
//  .timeouts(VertexAiIndexEndpointDeployedIndexTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | The user specified ID of the DeployedIndex. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.index">index</a></code> | <code>java.lang.String</code> | The name of the Index this is the deployment of. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | automatic_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | deployed_index_auth_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.deploymentGroup">deploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.enableAccessLogging">enableAccessLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, private endpoint's access logs are sent to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexId"></a>

- *Type:* java.lang.String

The user specified ID of the DeployedIndex.

The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_id VertexAiIndexEndpointDeployedIndex#deployed_index_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.index"></a>

- *Type:* java.lang.String

The name of the Index this is the deployment of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index VertexAiIndexEndpointDeployedIndex#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.indexEndpoint"></a>

- *Type:* java.lang.String

Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index_endpoint VertexAiIndexEndpointDeployedIndex#index_endpoint}

---

##### `automaticResources`<sup>Optional</sup> <a name="automaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.automaticResources"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

automatic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#automatic_resources VertexAiIndexEndpointDeployedIndex#automatic_resources}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.dedicatedResources"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#dedicated_resources VertexAiIndexEndpointDeployedIndex#dedicated_resources}

---

##### `deployedIndexAuthConfig`<sup>Optional</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.deployedIndexAuthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

deployed_index_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config VertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}

---

##### `deploymentGroup`<sup>Optional</sup> <a name="deploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.deploymentGroup"></a>

- *Type:* java.lang.String

The deployment group can be no longer than 64 characters (eg: 'test', 'prod').

If not set, we will use the 'default' deployment group.
Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
Note: we only support up to 5 deployment groups (not including 'default').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployment_group VertexAiIndexEndpointDeployedIndex#deployment_group}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#display_name VertexAiIndexEndpointDeployedIndex#display_name}

---

##### `enableAccessLogging`<sup>Optional</sup> <a name="enableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.enableAccessLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, private endpoint's access logs are sent to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#enable_access_logging VertexAiIndexEndpointDeployedIndex#enable_access_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.reservedIpRanges"></a>

- *Type:* java.util.List<java.lang.String>

A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.

If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.

The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].

For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges VertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#timeouts VertexAiIndexEndpointDeployedIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putAutomaticResources">putAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDedicatedResources">putDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig">putDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetAutomaticResources">resetAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDedicatedResources">resetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig">resetDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeploymentGroup">resetDeploymentGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging">resetEnableAccessLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetReservedIpRanges">resetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomaticResources` <a name="putAutomaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putAutomaticResources"></a>

```java
public void putAutomaticResources(VertexAiIndexEndpointDeployedIndexAutomaticResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putAutomaticResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `putDedicatedResources` <a name="putDedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDedicatedResources"></a>

```java
public void putDedicatedResources(VertexAiIndexEndpointDeployedIndexDedicatedResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `putDeployedIndexAuthConfig` <a name="putDeployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig"></a>

```java
public void putDeployedIndexAuthConfig(VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putTimeouts"></a>

```java
public void putTimeouts(VertexAiIndexEndpointDeployedIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `resetAutomaticResources` <a name="resetAutomaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetAutomaticResources"></a>

```java
public void resetAutomaticResources()
```

##### `resetDedicatedResources` <a name="resetDedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDedicatedResources"></a>

```java
public void resetDedicatedResources()
```

##### `resetDeployedIndexAuthConfig` <a name="resetDeployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig"></a>

```java
public void resetDeployedIndexAuthConfig()
```

##### `resetDeploymentGroup` <a name="resetDeploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeploymentGroup"></a>

```java
public void resetDeploymentGroup()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnableAccessLogging` <a name="resetEnableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging"></a>

```java
public void resetEnableAccessLogging()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetId"></a>

```java
public void resetId()
```

##### `resetReservedIpRanges` <a name="resetReservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetReservedIpRanges"></a>

```java
public void resetReservedIpRanges()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndex;

VertexAiIndexEndpointDeployedIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndex;

VertexAiIndexEndpointDeployedIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndex;

VertexAiIndexEndpointDeployedIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndex;

VertexAiIndexEndpointDeployedIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiIndexEndpointDeployedIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiIndexEndpointDeployedIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiIndexEndpointDeployedIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiIndexEndpointDeployedIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexSyncTime">indexSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.privateEndpoints">privateEndpoints</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput">automaticResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput">dedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput">deployedIndexAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput">deployedIndexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput">deploymentGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput">enableAccessLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpointInput">indexEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput">reservedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroup">deploymentGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLogging">enableAccessLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automaticResources`<sup>Required</sup> <a name="automaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResources"></a>

```java
public VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference getAutomaticResources();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dedicatedResources`<sup>Required</sup> <a name="dedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResources"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a>

---

##### `deployedIndexAuthConfig`<sup>Required</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference getDeployedIndexAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a>

---

##### `indexSyncTime`<sup>Required</sup> <a name="indexSyncTime" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexSyncTime"></a>

```java
public java.lang.String getIndexSyncTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateEndpoints`<sup>Required</sup> <a name="privateEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.privateEndpoints"></a>

```java
public VertexAiIndexEndpointDeployedIndexPrivateEndpointsList getPrivateEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeouts"></a>

```java
public VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a>

---

##### `automaticResourcesInput`<sup>Optional</sup> <a name="automaticResourcesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput"></a>

```java
public VertexAiIndexEndpointDeployedIndexAutomaticResources getAutomaticResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `dedicatedResourcesInput`<sup>Optional</sup> <a name="dedicatedResourcesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResources getDedicatedResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `deployedIndexAuthConfigInput`<sup>Optional</sup> <a name="deployedIndexAuthConfigInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig getDeployedIndexAuthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `deployedIndexIdInput`<sup>Optional</sup> <a name="deployedIndexIdInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput"></a>

```java
public java.lang.String getDeployedIndexIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentGroupInput`<sup>Optional</sup> <a name="deploymentGroupInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput"></a>

```java
public java.lang.String getDeploymentGroupInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableAccessLoggingInput`<sup>Optional</sup> <a name="enableAccessLoggingInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput"></a>

```java
public java.lang.Object getEnableAccessLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexEndpointInput`<sup>Optional</sup> <a name="indexEndpointInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpointInput"></a>

```java
public java.lang.String getIndexEndpointInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `reservedIpRangesInput`<sup>Optional</sup> <a name="reservedIpRangesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getReservedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexId"></a>

```java
public java.lang.String getDeployedIndexId();
```

- *Type:* java.lang.String

---

##### `deploymentGroup`<sup>Required</sup> <a name="deploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroup"></a>

```java
public java.lang.String getDeploymentGroup();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableAccessLogging`<sup>Required</sup> <a name="enableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLogging"></a>

```java
public java.lang.Object getEnableAccessLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

---

##### `reservedIpRanges`<sup>Required</sup> <a name="reservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRanges"></a>

```java
public java.util.List<java.lang.String> getReservedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexEndpointDeployedIndexAutomaticResources <a name="VertexAiIndexEndpointDeployedIndexAutomaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexAutomaticResources;

VertexAiIndexEndpointDeployedIndexAutomaticResources.builder()
//  .maxReplicaCount(java.lang.Number)
//  .minReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | The minimum number of replicas this DeployedModel will be always deployed on. |

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount. The max allowed replica count is 1000.

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#max_replica_count VertexAiIndexEndpointDeployedIndex#max_replica_count}

---

##### `minReplicaCount`<sup>Optional</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

The minimum number of replicas this DeployedModel will be always deployed on.

If minReplicaCount is not set, the default value is 2 (we don't provide SLA when minReplicaCount=1).

If traffic against it increases, it may dynamically be deployed onto more replicas up to [maxReplicaCount](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/AutomaticResources#FIELDS.max_replica_count), and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#min_replica_count VertexAiIndexEndpointDeployedIndex#min_replica_count}

---

### VertexAiIndexEndpointDeployedIndexConfig <a name="VertexAiIndexEndpointDeployedIndexConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexConfig;

VertexAiIndexEndpointDeployedIndexConfig.builder()
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
    .deployedIndexId(java.lang.String)
    .index(java.lang.String)
    .indexEndpoint(java.lang.String)
//  .automaticResources(VertexAiIndexEndpointDeployedIndexAutomaticResources)
//  .dedicatedResources(VertexAiIndexEndpointDeployedIndexDedicatedResources)
//  .deployedIndexAuthConfig(VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig)
//  .deploymentGroup(java.lang.String)
//  .displayName(java.lang.String)
//  .enableAccessLogging(java.lang.Boolean)
//  .enableAccessLogging(IResolvable)
//  .id(java.lang.String)
//  .reservedIpRanges(java.util.List<java.lang.String>)
//  .timeouts(VertexAiIndexEndpointDeployedIndexTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | The user specified ID of the DeployedIndex. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.index">index</a></code> | <code>java.lang.String</code> | The name of the Index this is the deployment of. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | automatic_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | deployed_index_auth_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup">deploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging">enableAccessLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, private endpoint's access logs are sent to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges">reservedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId"></a>

```java
public java.lang.String getDeployedIndexId();
```

- *Type:* java.lang.String

The user specified ID of the DeployedIndex.

The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_id VertexAiIndexEndpointDeployedIndex#deployed_index_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

The name of the Index this is the deployment of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index VertexAiIndexEndpointDeployedIndex#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index_endpoint VertexAiIndexEndpointDeployedIndex#index_endpoint}

---

##### `automaticResources`<sup>Optional</sup> <a name="automaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.automaticResources"></a>

```java
public VertexAiIndexEndpointDeployedIndexAutomaticResources getAutomaticResources();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

automatic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#automatic_resources VertexAiIndexEndpointDeployedIndex#automatic_resources}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResources getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#dedicated_resources VertexAiIndexEndpointDeployedIndex#dedicated_resources}

---

##### `deployedIndexAuthConfig`<sup>Optional</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig getDeployedIndexAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

deployed_index_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config VertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}

---

##### `deploymentGroup`<sup>Optional</sup> <a name="deploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup"></a>

```java
public java.lang.String getDeploymentGroup();
```

- *Type:* java.lang.String

The deployment group can be no longer than 64 characters (eg: 'test', 'prod').

If not set, we will use the 'default' deployment group.
Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
Note: we only support up to 5 deployment groups (not including 'default').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployment_group VertexAiIndexEndpointDeployedIndex#deployment_group}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#display_name VertexAiIndexEndpointDeployedIndex#display_name}

---

##### `enableAccessLogging`<sup>Optional</sup> <a name="enableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging"></a>

```java
public java.lang.Object getEnableAccessLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, private endpoint's access logs are sent to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#enable_access_logging VertexAiIndexEndpointDeployedIndex#enable_access_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges"></a>

```java
public java.util.List<java.lang.String> getReservedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.

If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.

The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].

For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges VertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.timeouts"></a>

```java
public VertexAiIndexEndpointDeployedIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#timeouts VertexAiIndexEndpointDeployedIndex#timeouts}

---

### VertexAiIndexEndpointDeployedIndexDedicatedResources <a name="VertexAiIndexEndpointDeployedIndexDedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDedicatedResources;

VertexAiIndexEndpointDeployedIndexDedicatedResources.builder()
    .machineSpec(VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec)
    .minReplicaCount(java.lang.Number)
//  .maxReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#machine_spec VertexAiIndexEndpointDeployedIndex#machine_spec}

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#min_replica_count VertexAiIndexEndpointDeployedIndex#min_replica_count}

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#max_replica_count VertexAiIndexEndpointDeployedIndex#max_replica_count}

---

### VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec <a name="VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec;

VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.builder()
//  .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The type of the machine. |

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For [DeployedModel](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.endpoints#DeployedModel) this field is optional, and the default value is n1-standard-2. For [BatchPredictionJob](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.batchPredictionJobs#BatchPredictionJob) or as part of [WorkerPoolSpec](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec#WorkerPoolSpec) this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#machine_type VertexAiIndexEndpointDeployedIndex#machine_type}

---

### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig;

VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.builder()
//  .authProvider(VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | auth_provider block. |

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider getAuthProvider();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#auth_provider VertexAiIndexEndpointDeployedIndex#auth_provider}

---

### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider;

VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.builder()
//  .allowedIssuers(java.util.List<java.lang.String>)
//  .audiences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers">allowedIssuers</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed JWT issuers. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | The list of JWT audiences. |

---

##### `allowedIssuers`<sup>Optional</sup> <a name="allowedIssuers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuers();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed JWT issuers.

Each entry must be a valid Google service account, in the following format: service-account-name@project-id.iam.gserviceaccount.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#allowed_issuers VertexAiIndexEndpointDeployedIndex#allowed_issuers}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

The list of JWT audiences.

that are allowed to access. A JWT containing any of these audiences will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#audiences VertexAiIndexEndpointDeployedIndex#audiences}

---

### VertexAiIndexEndpointDeployedIndexPrivateEndpoints <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexPrivateEndpoints;

VertexAiIndexEndpointDeployedIndexPrivateEndpoints.builder()
    .build();
```


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints;

VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints.builder()
    .build();
```


### VertexAiIndexEndpointDeployedIndexTimeouts <a name="VertexAiIndexEndpointDeployedIndexTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexTimeouts;

VertexAiIndexEndpointDeployedIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#create VertexAiIndexEndpointDeployedIndex#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#delete VertexAiIndexEndpointDeployedIndex#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#update VertexAiIndexEndpointDeployedIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#create VertexAiIndexEndpointDeployedIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#delete VertexAiIndexEndpointDeployedIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/vertex_ai_index_endpoint_deployed_index#update VertexAiIndexEndpointDeployedIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference <a name="VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference;

new VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount">resetMinReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount"></a>

```java
public void resetMaxReplicaCount()
```

##### `resetMinReplicaCount` <a name="resetMinReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount"></a>

```java
public void resetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput"></a>

```java
public java.lang.Number getMaxReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput"></a>

```java
public java.lang.Number getMinReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexAutomaticResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---


### VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference <a name="VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference;

new VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---


### VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference <a name="VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference;

new VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec"></a>

```java
public void putMachineSpec(VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```java
public void resetMaxReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```java
public java.lang.Number getMaxReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```java
public java.lang.Number getMinReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexDedicatedResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---


### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference;

new VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers">resetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedIssuers` <a name="resetAllowedIssuers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers"></a>

```java
public void resetAllowedIssuers()
```

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput">allowedIssuersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers">allowedIssuers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedIssuersInput`<sup>Optional</sup> <a name="allowedIssuersInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIssuers`<sup>Required</sup> <a name="allowedIssuers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---


### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference;

new VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider">putAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthProvider` <a name="putAuthProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider"></a>

```java
public void putAuthProvider(VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider"></a>

```java
public void resetAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput">authProviderInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference getAuthProvider();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a>

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider getAuthProviderInput();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsList <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsList" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList;

new VertexAiIndexEndpointDeployedIndexPrivateEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get"></a>

```java
public VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference;

new VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress">matchGrpcAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints">pscAutomatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchGrpcAddress`<sup>Required</sup> <a name="matchGrpcAddress" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress"></a>

```java
public java.lang.String getMatchGrpcAddress();
```

- *Type:* java.lang.String

---

##### `pscAutomatedEndpoints`<sup>Required</sup> <a name="pscAutomatedEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints"></a>

```java
public VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList getPscAutomatedEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexPrivateEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpoints</a>

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList;

new VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get"></a>

```java
public VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference;

new VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress">matchAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchAddress`<sup>Required</sup> <a name="matchAddress" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress"></a>

```java
public java.lang.String getMatchAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue"></a>

```java
public VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a>

---


### VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference <a name="VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vertex_ai_index_endpoint_deployed_index.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference;

new VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

---



