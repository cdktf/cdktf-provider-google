# `dataCatalogEntry` Submodule <a name="`dataCatalogEntry` Submodule" id="@cdktf/provider-google.dataCatalogEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogEntry <a name="DataCatalogEntry" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry google_data_catalog_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntry(Construct Scope, string Id, DataCatalogEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig">DataCatalogEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig">DataCatalogEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec">PutGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetGcsFilesetSpec">ResetGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetLinkedResource">ResetLinkedResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedSystem">ResetUserSpecifiedSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedType">ResetUserSpecifiedType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGcsFilesetSpec` <a name="PutGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec"></a>

```csharp
private void PutGcsFilesetSpec(DataCatalogEntryGcsFilesetSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts"></a>

```csharp
private void PutTimeouts(DataCatalogEntryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGcsFilesetSpec` <a name="ResetGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetGcsFilesetSpec"></a>

```csharp
private void ResetGcsFilesetSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinkedResource` <a name="ResetLinkedResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetLinkedResource"></a>

```csharp
private void ResetLinkedResource()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserSpecifiedSystem` <a name="ResetUserSpecifiedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedSystem"></a>

```csharp
private void ResetUserSpecifiedSystem()
```

##### `ResetUserSpecifiedType` <a name="ResetUserSpecifiedType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedType"></a>

```csharp
private void ResetUserSpecifiedType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCatalogEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCatalogEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCatalogEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCatalogEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryDateShardedSpec">BigqueryDateShardedSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList">DataCatalogEntryBigqueryDateShardedSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryTableSpec">BigqueryTableSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList">DataCatalogEntryBigqueryTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpec">GcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference">DataCatalogEntryGcsFilesetSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.integratedSystem">IntegratedSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference">DataCatalogEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroupInput">EntryGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryIdInput">EntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpecInput">GcsFilesetSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResourceInput">LinkedResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystemInput">UserSpecifiedSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedTypeInput">UserSpecifiedTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroup">EntryGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryId">EntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResource">LinkedResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystem">UserSpecifiedSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedType">UserSpecifiedType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryDateShardedSpec`<sup>Required</sup> <a name="BigqueryDateShardedSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryDateShardedSpec"></a>

```csharp
public DataCatalogEntryBigqueryDateShardedSpecList BigqueryDateShardedSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList">DataCatalogEntryBigqueryDateShardedSpecList</a>

---

##### `BigqueryTableSpec`<sup>Required</sup> <a name="BigqueryTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryTableSpec"></a>

```csharp
public DataCatalogEntryBigqueryTableSpecList BigqueryTableSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList">DataCatalogEntryBigqueryTableSpecList</a>

---

##### `GcsFilesetSpec`<sup>Required</sup> <a name="GcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpec"></a>

```csharp
public DataCatalogEntryGcsFilesetSpecOutputReference GcsFilesetSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference">DataCatalogEntryGcsFilesetSpecOutputReference</a>

---

##### `IntegratedSystem`<sup>Required</sup> <a name="IntegratedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.integratedSystem"></a>

```csharp
public string IntegratedSystem { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeouts"></a>

```csharp
public DataCatalogEntryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference">DataCatalogEntryTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntryGroupInput`<sup>Optional</sup> <a name="EntryGroupInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroupInput"></a>

```csharp
public string EntryGroupInput { get; }
```

- *Type:* string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryIdInput"></a>

```csharp
public string EntryIdInput { get; }
```

- *Type:* string

---

##### `GcsFilesetSpecInput`<sup>Optional</sup> <a name="GcsFilesetSpecInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpecInput"></a>

```csharp
public DataCatalogEntryGcsFilesetSpec GcsFilesetSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkedResourceInput`<sup>Optional</sup> <a name="LinkedResourceInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResourceInput"></a>

```csharp
public string LinkedResourceInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserSpecifiedSystemInput`<sup>Optional</sup> <a name="UserSpecifiedSystemInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystemInput"></a>

```csharp
public string UserSpecifiedSystemInput { get; }
```

- *Type:* string

---

##### `UserSpecifiedTypeInput`<sup>Optional</sup> <a name="UserSpecifiedTypeInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedTypeInput"></a>

```csharp
public string UserSpecifiedTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroup"></a>

```csharp
public string EntryGroup { get; }
```

- *Type:* string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryId"></a>

```csharp
public string EntryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedResource`<sup>Required</sup> <a name="LinkedResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResource"></a>

```csharp
public string LinkedResource { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserSpecifiedSystem`<sup>Required</sup> <a name="UserSpecifiedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystem"></a>

```csharp
public string UserSpecifiedSystem { get; }
```

- *Type:* string

---

##### `UserSpecifiedType`<sup>Required</sup> <a name="UserSpecifiedType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedType"></a>

```csharp
public string UserSpecifiedType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogEntryBigqueryDateShardedSpec <a name="DataCatalogEntryBigqueryDateShardedSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryDateShardedSpec {

};
```


### DataCatalogEntryBigqueryTableSpec <a name="DataCatalogEntryBigqueryTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpec {

};
```


### DataCatalogEntryBigqueryTableSpecTableSpec <a name="DataCatalogEntryBigqueryTableSpecTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecTableSpec {

};
```


### DataCatalogEntryBigqueryTableSpecViewSpec <a name="DataCatalogEntryBigqueryTableSpecViewSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecViewSpec {

};
```


### DataCatalogEntryConfig <a name="DataCatalogEntryConfig" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EntryGroup,
    string EntryId,
    string Description = null,
    string DisplayName = null,
    DataCatalogEntryGcsFilesetSpec GcsFilesetSpec = null,
    string Id = null,
    string LinkedResource = null,
    string Schema = null,
    DataCatalogEntryTimeouts Timeouts = null,
    string Type = null,
    string UserSpecifiedSystem = null,
    string UserSpecifiedType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryGroup">EntryGroup</a></code> | <code>string</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryId">EntryId</a></code> | <code>string</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.description">Description</a></code> | <code>string</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.gcsFilesetSpec">GcsFilesetSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#id DataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.linkedResource">LinkedResource</a></code> | <code>string</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.schema">Schema</a></code> | <code>string</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.type">Type</a></code> | <code>string</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedSystem">UserSpecifiedSystem</a></code> | <code>string</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedType">UserSpecifiedType</a></code> | <code>string</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryGroup"></a>

```csharp
public string EntryGroup { get; set; }
```

- *Type:* string

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#entry_group DataCatalogEntry#entry_group}

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryId"></a>

```csharp
public string EntryId { get; set; }
```

- *Type:* string

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#entry_id DataCatalogEntry#entry_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#description DataCatalogEntry#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#display_name DataCatalogEntry#display_name}

---

##### `GcsFilesetSpec`<sup>Optional</sup> <a name="GcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.gcsFilesetSpec"></a>

```csharp
public DataCatalogEntryGcsFilesetSpec GcsFilesetSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#gcs_fileset_spec DataCatalogEntry#gcs_fileset_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#id DataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkedResource`<sup>Optional</sup> <a name="LinkedResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.linkedResource"></a>

```csharp
public string LinkedResource { get; set; }
```

- *Type:* string

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#linked_resource DataCatalogEntry#linked_resource}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#schema DataCatalogEntry#schema}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.timeouts"></a>

```csharp
public DataCatalogEntryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#timeouts DataCatalogEntry#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#type DataCatalogEntry#type}

---

##### `UserSpecifiedSystem`<sup>Optional</sup> <a name="UserSpecifiedSystem" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedSystem"></a>

```csharp
public string UserSpecifiedSystem { get; set; }
```

- *Type:* string

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#user_specified_system DataCatalogEntry#user_specified_system}

---

##### `UserSpecifiedType`<sup>Optional</sup> <a name="UserSpecifiedType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedType"></a>

```csharp
public string UserSpecifiedType { get; set; }
```

- *Type:* string

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#user_specified_type DataCatalogEntry#user_specified_type}

---

### DataCatalogEntryGcsFilesetSpec <a name="DataCatalogEntryGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryGcsFilesetSpec {
    string[] FilePatterns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.property.filePatterns">FilePatterns</a></code> | <code>string[]</code> | Patterns to identify a set of files in Google Cloud Storage. |

---

##### `FilePatterns`<sup>Required</sup> <a name="FilePatterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.property.filePatterns"></a>

```csharp
public string[] FilePatterns { get; set; }
```

- *Type:* string[]

Patterns to identify a set of files in Google Cloud Storage.

See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
* gs://bucket_name/file*: matches files prefixed by file in bucket_name
* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
* gs://bucket_name/a/* /b: matches all files in bucket_name that match a/* /b pattern, such as a/c/b, a/d/b
* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#file_patterns DataCatalogEntry#file_patterns}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs {

};
```


### DataCatalogEntryTimeouts <a name="DataCatalogEntryTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#create DataCatalogEntry#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#delete DataCatalogEntry#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#update DataCatalogEntry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#create DataCatalogEntry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#delete DataCatalogEntry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/data_catalog_entry#update DataCatalogEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogEntryBigqueryDateShardedSpecList <a name="DataCatalogEntryBigqueryDateShardedSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryDateShardedSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get"></a>

```csharp
private DataCatalogEntryBigqueryDateShardedSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCatalogEntryBigqueryDateShardedSpecOutputReference <a name="DataCatalogEntryBigqueryDateShardedSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryDateShardedSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount">ShardCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec">DataCatalogEntryBigqueryDateShardedSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount"></a>

```csharp
public double ShardCount { get; }
```

- *Type:* double

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue"></a>

```csharp
public DataCatalogEntryBigqueryDateShardedSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec">DataCatalogEntryBigqueryDateShardedSpec</a>

---


### DataCatalogEntryBigqueryTableSpecList <a name="DataCatalogEntryBigqueryTableSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get"></a>

```csharp
private DataCatalogEntryBigqueryTableSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCatalogEntryBigqueryTableSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType">TableSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec">TableSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList">DataCatalogEntryBigqueryTableSpecTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec">ViewSpec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList">DataCatalogEntryBigqueryTableSpecViewSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec">DataCatalogEntryBigqueryTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableSourceType`<sup>Required</sup> <a name="TableSourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType"></a>

```csharp
public string TableSourceType { get; }
```

- *Type:* string

---

##### `TableSpec`<sup>Required</sup> <a name="TableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec"></a>

```csharp
public DataCatalogEntryBigqueryTableSpecTableSpecList TableSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList">DataCatalogEntryBigqueryTableSpecTableSpecList</a>

---

##### `ViewSpec`<sup>Required</sup> <a name="ViewSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec"></a>

```csharp
public DataCatalogEntryBigqueryTableSpecViewSpecList ViewSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList">DataCatalogEntryBigqueryTableSpecViewSpecList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue"></a>

```csharp
public DataCatalogEntryBigqueryTableSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec">DataCatalogEntryBigqueryTableSpec</a>

---


### DataCatalogEntryBigqueryTableSpecTableSpecList <a name="DataCatalogEntryBigqueryTableSpecTableSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecTableSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get"></a>

```csharp
private DataCatalogEntryBigqueryTableSpecTableSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCatalogEntryBigqueryTableSpecTableSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecTableSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry">GroupedEntry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec">DataCatalogEntryBigqueryTableSpecTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupedEntry`<sup>Required</sup> <a name="GroupedEntry" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry"></a>

```csharp
public string GroupedEntry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue"></a>

```csharp
public DataCatalogEntryBigqueryTableSpecTableSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec">DataCatalogEntryBigqueryTableSpecTableSpec</a>

---


### DataCatalogEntryBigqueryTableSpecViewSpecList <a name="DataCatalogEntryBigqueryTableSpecViewSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecViewSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get"></a>

```csharp
private DataCatalogEntryBigqueryTableSpecViewSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCatalogEntryBigqueryTableSpecViewSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecViewSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryBigqueryTableSpecViewSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery">ViewQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec">DataCatalogEntryBigqueryTableSpecViewSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ViewQuery`<sup>Required</sup> <a name="ViewQuery" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery"></a>

```csharp
public string ViewQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue"></a>

```csharp
public DataCatalogEntryBigqueryTableSpecViewSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec">DataCatalogEntryBigqueryTableSpecViewSpec</a>

---


### DataCatalogEntryGcsFilesetSpecOutputReference <a name="DataCatalogEntryGcsFilesetSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryGcsFilesetSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs">SampleGcsFileSpecs</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput">FilePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns">FilePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SampleGcsFileSpecs`<sup>Required</sup> <a name="SampleGcsFileSpecs" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs"></a>

```csharp
public DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList SampleGcsFileSpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a>

---

##### `FilePatternsInput`<sup>Optional</sup> <a name="FilePatternsInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput"></a>

```csharp
public string[] FilePatternsInput { get; }
```

- *Type:* string[]

---

##### `FilePatterns`<sup>Required</sup> <a name="FilePatterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns"></a>

```csharp
public string[] FilePatterns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue"></a>

```csharp
public DataCatalogEntryGcsFilesetSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---


### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get"></a>

```csharp
private DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes">SizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes"></a>

```csharp
public double SizeBytes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue"></a>

```csharp
public DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a>

---


### DataCatalogEntryTimeoutsOutputReference <a name="DataCatalogEntryTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogEntryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



