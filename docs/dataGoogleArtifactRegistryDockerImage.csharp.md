# `dataGoogleArtifactRegistryDockerImage` Submodule <a name="`dataGoogleArtifactRegistryDockerImage` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImage <a name="DataGoogleArtifactRegistryDockerImage" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image google_artifact_registry_docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleArtifactRegistryDockerImage(Construct Scope, string Id, DataGoogleArtifactRegistryDockerImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig">DataGoogleArtifactRegistryDockerImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig">DataGoogleArtifactRegistryDockerImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleArtifactRegistryDockerImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleArtifactRegistryDockerImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleArtifactRegistryDockerImage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleArtifactRegistryDockerImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryDockerImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime">BuildTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes">ImageSizeBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime">UploadTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BuildTime`<sup>Required</sup> <a name="BuildTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.buildTime"></a>

```csharp
public string BuildTime { get; }
```

- *Type:* string

---

##### `ImageSizeBytes`<sup>Required</sup> <a name="ImageSizeBytes" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageSizeBytes"></a>

```csharp
public string ImageSizeBytes { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UploadTime`<sup>Required</sup> <a name="UploadTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.uploadTime"></a>

```csharp
public string UploadTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImageConfig <a name="DataGoogleArtifactRegistryDockerImageConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleArtifactRegistryDockerImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ImageName,
    string Location,
    string RepositoryId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName">ImageName</a></code> | <code>string</code> | The image name to fetch. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location">Location</a></code> | <code>string</code> | The region of the artifact registry repository. For example, "us-west1". |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The last part of the repository name to fetch from. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project">Project</a></code> | <code>string</code> | Project ID of the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

The image name to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#image_name DataGoogleArtifactRegistryDockerImage#image_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The region of the artifact registry repository. For example, "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#location DataGoogleArtifactRegistryDockerImage#location}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The last part of the repository name to fetch from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#repository_id DataGoogleArtifactRegistryDockerImage#repository_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#id DataGoogleArtifactRegistryDockerImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleArtifactRegistryDockerImage.DataGoogleArtifactRegistryDockerImageConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/artifact_registry_docker_image#project DataGoogleArtifactRegistryDockerImage#project}

---



