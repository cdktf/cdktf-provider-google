# `dataGoogleDataprocMetastoreTableIamPolicy` Submodule <a name="`dataGoogleDataprocMetastoreTableIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataprocMetastoreTableIamPolicy <a name="DataGoogleDataprocMetastoreTableIamPolicy" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy google_dataproc_metastore_table_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleDataprocMetastoreTableIamPolicy(Construct Scope, string Id, DataGoogleDataprocMetastoreTableIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig">DataGoogleDataprocMetastoreTableIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig">DataGoogleDataprocMetastoreTableIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataprocMetastoreTableIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDataprocMetastoreTableIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDataprocMetastoreTableIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDataprocMetastoreTableIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleDataprocMetastoreTableIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleDataprocMetastoreTableIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataprocMetastoreTableIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataprocMetastoreTableIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataprocMetastoreTableIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.table">Table</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataprocMetastoreTableIamPolicyConfig <a name="DataGoogleDataprocMetastoreTableIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleDataprocMetastoreTableIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseId,
    string ServiceId,
    string Table,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#database_id DataGoogleDataprocMetastoreTableIamPolicy#database_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#service_id DataGoogleDataprocMetastoreTableIamPolicy#service_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.table">Table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#table DataGoogleDataprocMetastoreTableIamPolicy#table}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#id DataGoogleDataprocMetastoreTableIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#location DataGoogleDataprocMetastoreTableIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#project DataGoogleDataprocMetastoreTableIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#database_id DataGoogleDataprocMetastoreTableIamPolicy#database_id}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#service_id DataGoogleDataprocMetastoreTableIamPolicy#service_id}.

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#table DataGoogleDataprocMetastoreTableIamPolicy#table}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#id DataGoogleDataprocMetastoreTableIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#location DataGoogleDataprocMetastoreTableIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreTableIamPolicy.DataGoogleDataprocMetastoreTableIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/dataproc_metastore_table_iam_policy#project DataGoogleDataprocMetastoreTableIamPolicy#project}.

---



