# `google_vertex_ai_endpoint`

Refer to the Terraform Registory for docs: [`google_vertex_ai_endpoint`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint).

# `vertexAiEndpoint` Submodule <a name="`vertexAiEndpoint` Submodule" id="@cdktf/provider-google.vertexAiEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiEndpoint <a name="VertexAiEndpoint" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint google_vertex_ai_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpoint(Construct Scope, string Id, VertexAiEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig">VertexAiEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig">VertexAiEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiEndpointEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts">VertexAiEndpointTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VertexAiEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.deployedModels">DeployedModels</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList">VertexAiEndpointDeployedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference">VertexAiEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.modelDeploymentMonitoringJob">ModelDeploymentMonitoringJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference">VertexAiEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeployedModels`<sup>Required</sup> <a name="DeployedModels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.deployedModels"></a>

```csharp
public VertexAiEndpointDeployedModelsList DeployedModels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList">VertexAiEndpointDeployedModelsList</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpec"></a>

```csharp
public VertexAiEndpointEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference">VertexAiEndpointEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ModelDeploymentMonitoringJob`<sup>Required</sup> <a name="ModelDeploymentMonitoringJob" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.modelDeploymentMonitoringJob"></a>

```csharp
public string ModelDeploymentMonitoringJob { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeouts"></a>

```csharp
public VertexAiEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference">VertexAiEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpecInput"></a>

```csharp
public VertexAiEndpointEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiEndpointConfig <a name="VertexAiEndpointConfig" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string Name,
    string Description = null,
    VertexAiEndpointEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Network = null,
    string Project = null,
    string Region = null,
    VertexAiEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Endpoint. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.description">Description</a></code> | <code>string</code> | The description of the Endpoint. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#id VertexAiEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your Endpoints. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.network">Network</a></code> | <code>string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#project VertexAiEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.region">Region</a></code> | <code>string</code> | The region for the resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts">VertexAiEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required.

The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#display_name VertexAiEndpoint#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#location VertexAiEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Endpoint.

The name must be numeric with no leading zeros and can be at most 10 digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#name VertexAiEndpoint#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#description VertexAiEndpoint#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.encryptionSpec"></a>

```csharp
public VertexAiEndpointEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#encryption_spec VertexAiEndpoint#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#id VertexAiEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your Endpoints.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#labels VertexAiEndpoint#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#network VertexAiEndpoint#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#project VertexAiEndpoint#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#region VertexAiEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.timeouts"></a>

```csharp
public VertexAiEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts">VertexAiEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#timeouts VertexAiEndpoint#timeouts}

---

### VertexAiEndpointDeployedModels <a name="VertexAiEndpointDeployedModels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModels {

};
```


### VertexAiEndpointDeployedModelsAutomaticResources <a name="VertexAiEndpointDeployedModelsAutomaticResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsAutomaticResources {

};
```


### VertexAiEndpointDeployedModelsDedicatedResources <a name="VertexAiEndpointDeployedModelsDedicatedResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResources {

};
```


### VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs <a name="VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs {

};
```


### VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec <a name="VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec {

};
```


### VertexAiEndpointDeployedModelsPrivateEndpoints <a name="VertexAiEndpointDeployedModelsPrivateEndpoints" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsPrivateEndpoints {

};
```


### VertexAiEndpointEncryptionSpec <a name="VertexAiEndpointEncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#kms_key_name VertexAiEndpoint#kms_key_name}

---

### VertexAiEndpointTimeouts <a name="VertexAiEndpointTimeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#create VertexAiEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#delete VertexAiEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#update VertexAiEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#create VertexAiEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#delete VertexAiEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/vertex_ai_endpoint#update VertexAiEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiEndpointDeployedModelsAutomaticResourcesList <a name="VertexAiEndpointDeployedModelsAutomaticResourcesList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsAutomaticResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.get"></a>

```csharp
private VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference <a name="VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources">VertexAiEndpointDeployedModelsAutomaticResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; }
```

- *Type:* double

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointDeployedModelsAutomaticResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources">VertexAiEndpointDeployedModelsAutomaticResources</a>

---


### VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList <a name="VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```csharp
private VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a>

---


### VertexAiEndpointDeployedModelsDedicatedResourcesList <a name="VertexAiEndpointDeployedModelsDedicatedResourcesList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.get"></a>

```csharp
private VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList <a name="VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get"></a>

```csharp
private VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference <a name="VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a>

---


### VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference <a name="VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources">VertexAiEndpointDeployedModelsDedicatedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingMetricSpecs`<sup>Required</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```csharp
public VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList AutoscalingMetricSpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec"></a>

```csharp
public VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList MachineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a>

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; }
```

- *Type:* double

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointDeployedModelsDedicatedResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources">VertexAiEndpointDeployedModelsDedicatedResources</a>

---


### VertexAiEndpointDeployedModelsList <a name="VertexAiEndpointDeployedModelsList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.get"></a>

```csharp
private VertexAiEndpointDeployedModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEndpointDeployedModelsOutputReference <a name="VertexAiEndpointDeployedModelsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.automaticResources">AutomaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList">VertexAiEndpointDeployedModelsAutomaticResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList">VertexAiEndpointDeployedModelsDedicatedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging">EnableAccessLogging</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging">EnableContainerLogging</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints">PrivateEndpoints</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList">VertexAiEndpointDeployedModelsPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.sharedResources">SharedResources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels">VertexAiEndpointDeployedModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticResources`<sup>Required</sup> <a name="AutomaticResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.automaticResources"></a>

```csharp
public VertexAiEndpointDeployedModelsAutomaticResourcesList AutomaticResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList">VertexAiEndpointDeployedModelsAutomaticResourcesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DedicatedResources`<sup>Required</sup> <a name="DedicatedResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources"></a>

```csharp
public VertexAiEndpointDeployedModelsDedicatedResourcesList DedicatedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList">VertexAiEndpointDeployedModelsDedicatedResourcesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableAccessLogging`<sup>Required</sup> <a name="EnableAccessLogging" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging"></a>

```csharp
public IResolvable EnableAccessLogging { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableContainerLogging`<sup>Required</sup> <a name="EnableContainerLogging" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging"></a>

```csharp
public IResolvable EnableContainerLogging { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.modelVersionId"></a>

```csharp
public string ModelVersionId { get; }
```

- *Type:* string

---

##### `PrivateEndpoints`<sup>Required</sup> <a name="PrivateEndpoints" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints"></a>

```csharp
public VertexAiEndpointDeployedModelsPrivateEndpointsList PrivateEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList">VertexAiEndpointDeployedModelsPrivateEndpointsList</a>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `SharedResources`<sup>Required</sup> <a name="SharedResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.sharedResources"></a>

```csharp
public string SharedResources { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointDeployedModels InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels">VertexAiEndpointDeployedModels</a>

---


### VertexAiEndpointDeployedModelsPrivateEndpointsList <a name="VertexAiEndpointDeployedModelsPrivateEndpointsList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsPrivateEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.get"></a>

```csharp
private VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference <a name="VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri">ExplainHttpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri">HealthHttpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri">PredictHttpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints">VertexAiEndpointDeployedModelsPrivateEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExplainHttpUri`<sup>Required</sup> <a name="ExplainHttpUri" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri"></a>

```csharp
public string ExplainHttpUri { get; }
```

- *Type:* string

---

##### `HealthHttpUri`<sup>Required</sup> <a name="HealthHttpUri" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri"></a>

```csharp
public string HealthHttpUri { get; }
```

- *Type:* string

---

##### `PredictHttpUri`<sup>Required</sup> <a name="PredictHttpUri" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri"></a>

```csharp
public string PredictHttpUri { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointDeployedModelsPrivateEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints">VertexAiEndpointDeployedModelsPrivateEndpoints</a>

---


### VertexAiEndpointEncryptionSpecOutputReference <a name="VertexAiEndpointEncryptionSpecOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiEndpointEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

---


### VertexAiEndpointTimeoutsOutputReference <a name="VertexAiEndpointTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VertexAiEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



