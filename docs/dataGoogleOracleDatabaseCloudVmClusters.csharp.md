# `dataGoogleOracleDatabaseCloudVmClusters` Submodule <a name="`dataGoogleOracleDatabaseCloudVmClusters` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseCloudVmClusters <a name="DataGoogleOracleDatabaseCloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/oracle_database_cloud_vm_clusters google_oracle_database_cloud_vm_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClusters(Construct Scope, string Id, DataGoogleOracleDatabaseCloudVmClustersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig">DataGoogleOracleDatabaseCloudVmClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig">DataGoogleOracleDatabaseCloudVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseCloudVmClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseCloudVmClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseCloudVmClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseCloudVmClusters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseCloudVmClusters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseCloudVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/oracle_database_cloud_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseCloudVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cloudVmClusters">CloudVmClusters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudVmClusters`<sup>Required</sup> <a name="CloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cloudVmClusters"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList CloudVmClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters {

};
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties {

};
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions {

};
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone {

};
```


### DataGoogleOracleDatabaseCloudVmClustersConfig <a name="DataGoogleOracleDatabaseCloudVmClustersConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.location">Location</a></code> | <code>string</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the dataset is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/oracle_database_cloud_vm_clusters#location DataGoogleOracleDatabaseCloudVmClusters#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/oracle_database_cloud_vm_clusters#project DataGoogleOracleDatabaseCloudVmClusters#project}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get"></a>

```csharp
private DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters">DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudVmClusterId"></a>

```csharp
public string CloudVmClusterId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.exadataInfrastructure"></a>

```csharp
public string ExadataInfrastructure { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.properties"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters">DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get"></a>

```csharp
private DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiagnosticsEventsEnabled`<sup>Required</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```csharp
public IResolvable DiagnosticsEventsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HealthMonitoringEnabled`<sup>Required</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```csharp
public IResolvable HealthMonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncidentLogsEnabled`<sup>Required</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```csharp
public IResolvable IncidentLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get"></a>

```csharp
private DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbServerOcids">DbServerOcids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dnsListenerIp">DnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDns">ScanDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.storageSizeGb">StorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.systemVersion">SystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```csharp
public double DbNodeStorageSizeGb { get; }
```

- *Type:* double

---

##### `DbServerOcids`<sup>Required</sup> <a name="DbServerOcids" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbServerOcids"></a>

```csharp
public string[] DbServerOcids { get; }
```

- *Type:* string[]

---

##### `DiagnosticsDataCollectionOptions`<sup>Required</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList DiagnosticsDataCollectionOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList</a>

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; }
```

- *Type:* string

---

##### `DnsListenerIp`<sup>Required</sup> <a name="DnsListenerIp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dnsListenerIp"></a>

```csharp
public string DnsListenerIp { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `LocalBackupEnabled`<sup>Required</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.localBackupEnabled"></a>

```csharp
public IResolvable LocalBackupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `ScanDns`<sup>Required</sup> <a name="ScanDns" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDns"></a>

```csharp
public string ScanDns { get; }
```

- *Type:* string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDnsRecordId"></a>

```csharp
public string ScanDnsRecordId { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SparseDiskgroupEnabled`<sup>Required</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```csharp
public IResolvable SparseDiskgroupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.storageSizeGb"></a>

```csharp
public double StorageSizeGb { get; }
```

- *Type:* double

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.systemVersion"></a>

```csharp
public string SystemVersion { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.timeZone"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList TimeZone { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get"></a>

```csharp
private DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone</a>

---



