# `dataGoogleCloudfunctionsFunction` Submodule <a name="`dataGoogleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctionsFunction <a name="DataGoogleCloudfunctionsFunction" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunction(Construct Scope, string Id, DataGoogleCloudfunctionsFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig">DataGoogleCloudfunctionsFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig">DataGoogleCloudfunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudfunctionsFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudfunctionsFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudfunctionsFunction.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudfunctionsFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudfunctionsFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildServiceAccount">BuildServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRegistry">DockerRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRepository">DockerRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.entryPoint">EntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.environmentVariables">EnvironmentVariables</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList">DataGoogleCloudfunctionsFunctionEventTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.ingressSettings">IngressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList">DataGoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList">DataGoogleCloudfunctionsFunctionSourceRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.triggerHttp">TriggerHttp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnector">VpcConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailableMemoryMb`<sup>Required</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```csharp
public double AvailableMemoryMb { get; }
```

- *Type:* double

---

##### `BuildEnvironmentVariables`<sup>Required</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```csharp
public StringMap BuildEnvironmentVariables { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `BuildServiceAccount`<sup>Required</sup> <a name="BuildServiceAccount" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildServiceAccount"></a>

```csharp
public string BuildServiceAccount { get; }
```

- *Type:* string

---

##### `BuildWorkerPool`<sup>Required</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```csharp
public string BuildWorkerPool { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DockerRegistry`<sup>Required</sup> <a name="DockerRegistry" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```csharp
public string DockerRegistry { get; }
```

- *Type:* string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRepository"></a>

```csharp
public string DockerRepository { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.entryPoint"></a>

```csharp
public string EntryPoint { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.eventTrigger"></a>

```csharp
public DataGoogleCloudfunctionsFunctionEventTriggerList EventTrigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList">DataGoogleCloudfunctionsFunctionEventTriggerList</a>

---

##### `HttpsTriggerSecurityLevel`<sup>Required</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```csharp
public string HttpsTriggerSecurityLevel { get; }
```

- *Type:* string

---

##### `HttpsTriggerUrl`<sup>Required</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```csharp
public string HttpsTriggerUrl { get; }
```

- *Type:* string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.ingressSettings"></a>

```csharp
public string IngressSettings { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList SecretEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretVolumes"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSecretVolumesList SecretVolumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList">DataGoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `SourceArchiveBucket`<sup>Required</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```csharp
public string SourceArchiveBucket { get; }
```

- *Type:* string

---

##### `SourceArchiveObject`<sup>Required</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```csharp
public string SourceArchiveObject { get; }
```

- *Type:* string

---

##### `SourceRepository`<sup>Required</sup> <a name="SourceRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceRepository"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSourceRepositoryList SourceRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList">DataGoogleCloudfunctionsFunctionSourceRepositoryList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `TriggerHttp`<sup>Required</sup> <a name="TriggerHttp" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.triggerHttp"></a>

```csharp
public IResolvable TriggerHttp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnector"></a>

```csharp
public string VpcConnector { get; }
```

- *Type:* string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```csharp
public string VpcConnectorEgressSettings { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctionsFunctionConfig <a name="DataGoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.project">Project</a></code> | <code>string</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.region">Region</a></code> | <code>string</code> | Region of function. If it is not provided, the provider region is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function#name DataGoogleCloudfunctionsFunction#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function#project DataGoogleCloudfunctionsFunction#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/cloudfunctions_function#region DataGoogleCloudfunctionsFunction#region}

---

### DataGoogleCloudfunctionsFunctionEventTrigger <a name="DataGoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionEventTrigger {

};
```


### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy {

};
```


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables {

};
```


### DataGoogleCloudfunctionsFunctionSecretVolumes <a name="DataGoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretVolumes {

};
```


### DataGoogleCloudfunctionsFunctionSecretVolumesVersions <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretVolumesVersions {

};
```


### DataGoogleCloudfunctionsFunctionSourceRepository <a name="DataGoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSourceRepository {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get"></a>

```csharp
private DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">Retry</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```csharp
public IResolvable Retry { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### DataGoogleCloudfunctionsFunctionEventTriggerList <a name="DataGoogleCloudfunctionsFunctionEventTriggerList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionEventTriggerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get"></a>

```csharp
private DataGoogleCloudfunctionsFunctionEventTriggerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="DataGoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionEventTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger">DataGoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```csharp
public DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList FailurePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctionsFunctionEventTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger">DataGoogleCloudfunctionsFunctionEventTrigger</a>

---


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```csharp
private DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>

---


### DataGoogleCloudfunctionsFunctionSecretVolumesList <a name="DataGoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```csharp
private DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList">DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes">DataGoogleCloudfunctionsFunctionSecretVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList">DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSecretVolumes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes">DataGoogleCloudfunctionsFunctionSecretVolumes</a>

---


### DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```csharp
private DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions">DataGoogleCloudfunctionsFunctionSecretVolumesVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSecretVolumesVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions">DataGoogleCloudfunctionsFunctionSecretVolumesVersions</a>

---


### DataGoogleCloudfunctionsFunctionSourceRepositoryList <a name="DataGoogleCloudfunctionsFunctionSourceRepositoryList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSourceRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get"></a>

```csharp
private DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">DeployedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository">DataGoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployedUrl`<sup>Required</sup> <a name="DeployedUrl" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```csharp
public string DeployedUrl { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctionsFunctionSourceRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository">DataGoogleCloudfunctionsFunctionSourceRepository</a>

---



