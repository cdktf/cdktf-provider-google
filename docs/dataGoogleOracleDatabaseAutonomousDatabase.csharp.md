# `dataGoogleOracleDatabaseAutonomousDatabase` Submodule <a name="`dataGoogleOracleDatabaseAutonomousDatabase` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseAutonomousDatabase <a name="DataGoogleOracleDatabaseAutonomousDatabase" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database google_oracle_database_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabase(Construct Scope, string Id, DataGoogleOracleDatabaseAutonomousDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig">DataGoogleOracleDatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig">DataGoogleOracleDatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseAutonomousDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseAutonomousDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseAutonomousDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseAutonomousDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseAutonomousDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.properties"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseAutonomousDatabaseConfig <a name="DataGoogleOracleDatabaseAutonomousDatabaseConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousDatabaseId,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#id DataGoogleOracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#project DataGoogleOracleDatabaseAutonomousDatabase#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#autonomous_database_id DataGoogleOracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#location DataGoogleOracleDatabaseAutonomousDatabase#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#id DataGoogleOracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/oracle_database_autonomous_database#project DataGoogleOracleDatabaseAutonomousDatabase#project}.

---

### DataGoogleOracleDatabaseAutonomousDatabaseProperties <a name="DataGoogleOracleDatabaseAutonomousDatabaseProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabaseProperties {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime {

};
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion"></a>

```csharp
public string ApexVersion { get; }
```

- *Type:* string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```csharp
public string OrdsVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList AllConnectionStrings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated"></a>

```csharp
public string Dedicated { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList Profiles { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```csharp
public string ConsumerGroup { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```csharp
public string HostFormat { get; }
```

- *Type:* string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```csharp
public IResolvable IsRegional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```csharp
public string SessionMode { get; }
```

- *Type:* string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```csharp
public string SyntaxFormat { get; }
```

- *Type:* string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```csharp
public string TlsAuthentication { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri">ApexUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">DatabaseTransformsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri">GraphStudioUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">MachineLearningNotebookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">MachineLearningUserManagementUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri">MongoDbUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri">OrdsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">SqlDevWebUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexUri`<sup>Required</sup> <a name="ApexUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```csharp
public string ApexUri { get; }
```

- *Type:* string

---

##### `DatabaseTransformsUri`<sup>Required</sup> <a name="DatabaseTransformsUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```csharp
public string DatabaseTransformsUri { get; }
```

- *Type:* string

---

##### `GraphStudioUri`<sup>Required</sup> <a name="GraphStudioUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```csharp
public string GraphStudioUri { get; }
```

- *Type:* string

---

##### `MachineLearningNotebookUri`<sup>Required</sup> <a name="MachineLearningNotebookUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```csharp
public string MachineLearningNotebookUri { get; }
```

- *Type:* string

---

##### `MachineLearningUserManagementUri`<sup>Required</sup> <a name="MachineLearningUserManagementUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```csharp
public string MachineLearningUserManagementUri { get; }
```

- *Type:* string

---

##### `MongoDbUri`<sup>Required</sup> <a name="MongoDbUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```csharp
public string MongoDbUri { get; }
```

- *Type:* string

---

##### `OrdsUri`<sup>Required</sup> <a name="OrdsUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```csharp
public string OrdsUri { get; }
```

- *Type:* string

---

##### `SqlDevWebUri`<sup>Required</sup> <a name="SqlDevWebUri" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```csharp
public string SqlDevWebUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">DataGuardRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">DisasterRecoveryRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">LagTimeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataGuardRoleChangedTime`<sup>Required</sup> <a name="DataGuardRoleChangedTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```csharp
public string DataGuardRoleChangedTime { get; }
```

- *Type:* string

---

##### `DisasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="DisasterRecoveryRoleChangedTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```csharp
public string DisasterRecoveryRoleChangedTime { get; }
```

- *Type:* string

---

##### `LagTimeDuration`<sup>Required</sup> <a name="LagTimeDuration" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```csharp
public string LagTimeDuration { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb">ActualUsedDataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb">AllocatedStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails">ApexDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">ArePrimaryAllowlistedIpsUsed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays">BackupRetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState">DatabaseManagementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState">DataSafeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition">DbEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration">FailedDataRecoveryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled">IsStorageAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime">MaintenanceBeginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime">MaintenanceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType">MaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">MemoryPerOracleComputeUnitGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs">MemoryTableGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet">NCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime">NextLongTermBackupTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState">OperationsInsightsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds">PeerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState">RefreshableState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails">ScheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions">SupportedCloneRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">TotalAutoBackupStorageSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs">UsedDataStorageSizeTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties">DataGoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualUsedDataStorageSizeTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```csharp
public double ActualUsedDataStorageSizeTb { get; }
```

- *Type:* double

---

##### `AllocatedStorageSizeTb`<sup>Required</sup> <a name="AllocatedStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```csharp
public double AllocatedStorageSizeTb { get; }
```

- *Type:* double

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList ApexDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a>

---

##### `ArePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```csharp
public IResolvable ArePrimaryAllowlistedIpsUsed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodDays`<sup>Required</sup> <a name="BackupRetentionPeriodDays" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```csharp
public double BackupRetentionPeriodDays { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList ConnectionUrls { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a>

---

##### `DatabaseManagementState`<sup>Required</sup> <a name="DatabaseManagementState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState"></a>

```csharp
public string DatabaseManagementState { get; }
```

- *Type:* string

---

##### `DataSafeState`<sup>Required</sup> <a name="DataSafeState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState"></a>

```csharp
public string DataSafeState { get; }
```

- *Type:* string

---

##### `DataStorageSizeGb`<sup>Required</sup> <a name="DataStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb"></a>

```csharp
public double DataStorageSizeGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; }
```

- *Type:* double

---

##### `DbEdition`<sup>Required</sup> <a name="DbEdition" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition"></a>

```csharp
public string DbEdition { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `FailedDataRecoveryDuration`<sup>Required</sup> <a name="FailedDataRecoveryDuration" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```csharp
public string FailedDataRecoveryDuration { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```csharp
public IResolvable IsLocalDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsStorageAutoScalingEnabled`<sup>Required</sup> <a name="IsStorageAutoScalingEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```csharp
public IResolvable IsStorageAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType"></a>

```csharp
public string LocalDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList LocalStandbyDb { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a>

---

##### `MaintenanceBeginTime`<sup>Required</sup> <a name="MaintenanceBeginTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime"></a>

```csharp
public string MaintenanceBeginTime { get; }
```

- *Type:* string

---

##### `MaintenanceEndTime`<sup>Required</sup> <a name="MaintenanceEndTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime"></a>

```csharp
public string MaintenanceEndTime { get; }
```

- *Type:* string

---

##### `MaintenanceScheduleType`<sup>Required</sup> <a name="MaintenanceScheduleType" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType"></a>

```csharp
public string MaintenanceScheduleType { get; }
```

- *Type:* string

---

##### `MemoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitGbs { get; }
```

- *Type:* double

---

##### `MemoryTableGbs`<sup>Required</sup> <a name="MemoryTableGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs"></a>

```csharp
public double MemoryTableGbs { get; }
```

- *Type:* double

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired"></a>

```csharp
public IResolvable MtlsConnectionRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NCharacterSet`<sup>Required</sup> <a name="NCharacterSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet"></a>

```csharp
public string NCharacterSet { get; }
```

- *Type:* string

---

##### `NextLongTermBackupTime`<sup>Required</sup> <a name="NextLongTermBackupTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime"></a>

```csharp
public string NextLongTermBackupTime { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `OperationsInsightsState`<sup>Required</sup> <a name="OperationsInsightsState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState"></a>

```csharp
public string OperationsInsightsState { get; }
```

- *Type:* string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds"></a>

```csharp
public string[] PeerDbIds { get; }
```

- *Type:* string[]

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `RefreshableState`<sup>Required</sup> <a name="RefreshableState" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState"></a>

```csharp
public string RefreshableState { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ScheduledOperationDetails`<sup>Required</sup> <a name="ScheduledOperationDetails" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList ScheduledOperationDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a>

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedCloneRegions`<sup>Required</sup> <a name="SupportedCloneRegions" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions"></a>

```csharp
public string[] SupportedCloneRegions { get; }
```

- *Type:* string[]

---

##### `TotalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="TotalAutoBackupStorageSizeGbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```csharp
public double TotalAutoBackupStorageSizeGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeTbs`<sup>Required</sup> <a name="UsedDataStorageSizeTbs" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```csharp
public double UsedDataStorageSizeTbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabaseProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties">DataGoogleOracleDatabaseAutonomousDatabaseProperties</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime">StopTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList StartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList StopTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get"></a>

```csharp
private DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a>

---



