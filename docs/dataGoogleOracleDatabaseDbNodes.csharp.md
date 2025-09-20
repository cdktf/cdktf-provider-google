# `dataGoogleOracleDatabaseDbNodes` Submodule <a name="`dataGoogleOracleDatabaseDbNodes` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseDbNodes <a name="DataGoogleOracleDatabaseDbNodes" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes google_oracle_database_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodes(Construct Scope, string Id, DataGoogleOracleDatabaseDbNodesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig">DataGoogleOracleDatabaseDbNodesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig">DataGoogleOracleDatabaseDbNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseDbNodes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseDbNodes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseDbNodes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleOracleDatabaseDbNodes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseDbNodes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseDbNodes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dbNodes">DbNodes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList">DataGoogleOracleDatabaseDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmClusterInput">CloudVmClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmCluster">CloudVmCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbNodes`<sup>Required</sup> <a name="DbNodes" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.dbNodes"></a>

```csharp
public DataGoogleOracleDatabaseDbNodesDbNodesList DbNodes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList">DataGoogleOracleDatabaseDbNodesDbNodesList</a>

---

##### `CloudVmClusterInput`<sup>Optional</sup> <a name="CloudVmClusterInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmClusterInput"></a>

```csharp
public string CloudVmClusterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `CloudVmCluster`<sup>Required</sup> <a name="CloudVmCluster" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.cloudVmCluster"></a>

```csharp
public string CloudVmCluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseDbNodesConfig <a name="DataGoogleOracleDatabaseDbNodesConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudVmCluster,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.cloudVmCluster">CloudVmCluster</a></code> | <code>string</code> | vmcluster. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.location">Location</a></code> | <code>string</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes#id DataGoogleOracleDatabaseDbNodes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the dataset is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudVmCluster`<sup>Required</sup> <a name="CloudVmCluster" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.cloudVmCluster"></a>

```csharp
public string CloudVmCluster { get; set; }
```

- *Type:* string

vmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes#cloud_vm_cluster DataGoogleOracleDatabaseDbNodes#cloud_vm_cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes#location DataGoogleOracleDatabaseDbNodes#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes#id DataGoogleOracleDatabaseDbNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_db_nodes#project DataGoogleOracleDatabaseDbNodes#project}

---

### DataGoogleOracleDatabaseDbNodesDbNodes <a name="DataGoogleOracleDatabaseDbNodesDbNodes" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesDbNodes {

};
```


### DataGoogleOracleDatabaseDbNodesDbNodesProperties <a name="DataGoogleOracleDatabaseDbNodesDbNodesProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesDbNodesProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseDbNodesDbNodesList <a name="DataGoogleOracleDatabaseDbNodesDbNodesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesDbNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.get"></a>

```csharp
private DataGoogleOracleDatabaseDbNodesDbNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseDbNodesDbNodesOutputReference <a name="DataGoogleOracleDatabaseDbNodesDbNodesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesDbNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList">DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes">DataGoogleOracleDatabaseDbNodesDbNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.properties"></a>

```csharp
public DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList">DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseDbNodesDbNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodes">DataGoogleOracleDatabaseDbNodesDbNodes</a>

---


### DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList <a name="DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.get"></a>

```csharp
private DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference <a name="DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbServerOcid">DbServerOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.totalCpuCoreCount">TotalCpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties">DataGoogleOracleDatabaseDbNodesDbNodesProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```csharp
public double DbNodeStorageSizeGb { get; }
```

- *Type:* double

---

##### `DbServerOcid`<sup>Required</sup> <a name="DbServerOcid" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.dbServerOcid"></a>

```csharp
public string DbServerOcid { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TotalCpuCoreCount`<sup>Required</sup> <a name="TotalCpuCoreCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.totalCpuCoreCount"></a>

```csharp
public double TotalCpuCoreCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseDbNodesDbNodesProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbNodes.DataGoogleOracleDatabaseDbNodesDbNodesProperties">DataGoogleOracleDatabaseDbNodesDbNodesProperties</a>

---



