# `dataCatalogTagTemplate` Submodule <a name="`dataCatalogTagTemplate` Submodule" id="@cdktf/provider-google.dataCatalogTagTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTagTemplate <a name="DataCatalogTagTemplate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template google_data_catalog_tag_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplate(Construct Scope, string Id, DataCatalogTagTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig">DataCatalogTagTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig">DataCatalogTagTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFields` <a name="PutFields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields"></a>

```csharp
private void PutFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(DataCatalogTagTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCatalogTagTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogTagTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogTagTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogTagTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataCatalogTagTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCatalogTagTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCatalogTagTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCatalogTagTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogTagTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList">DataCatalogTagTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference">DataCatalogTagTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fieldsInput">FieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateIdInput">TagTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateId">TagTemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fields"></a>

```csharp
public DataCatalogTagTemplateFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList">DataCatalogTagTemplateFieldsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeouts"></a>

```csharp
public DataCatalogTagTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference">DataCatalogTagTemplateTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fieldsInput"></a>

```csharp
public object FieldsInput { get; }
```

- *Type:* object

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagTemplateIdInput`<sup>Optional</sup> <a name="TagTemplateIdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateIdInput"></a>

```csharp
public string TagTemplateIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TagTemplateId`<sup>Required</sup> <a name="TagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateId"></a>

```csharp
public string TagTemplateId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTagTemplateConfig <a name="DataCatalogTagTemplateConfig" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Fields,
    string TagTemplateId,
    string DisplayName = null,
    object ForceDelete = null,
    string Id = null,
    string Project = null,
    string Region = null,
    DataCatalogTagTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.fields">Fields</a></code> | <code>object</code> | fields block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.tagTemplateId">TagTemplateId</a></code> | <code>string</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.region">Region</a></code> | <code>string</code> | Template location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.fields"></a>

```csharp
public object Fields { get; set; }
```

- *Type:* object

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#fields DataCatalogTagTemplate#fields}

---

##### `TagTemplateId`<sup>Required</sup> <a name="TagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.tagTemplateId"></a>

```csharp
public string TagTemplateId { get; set; }
```

- *Type:* string

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#tag_template_id DataCatalogTagTemplate#tag_template_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#force_delete DataCatalogTagTemplate#force_delete}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#region DataCatalogTagTemplate#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.timeouts"></a>

```csharp
public DataCatalogTagTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#timeouts DataCatalogTagTemplate#timeouts}

---

### DataCatalogTagTemplateFields <a name="DataCatalogTagTemplateFields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFields {
    string FieldId,
    DataCatalogTagTemplateFieldsType Type,
    string Description = null,
    string DisplayName = null,
    object IsRequired = null,
    double Order = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.fieldId">FieldId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.type">Type</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | type block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.description">Description</a></code> | <code>string</code> | A description for this field. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for this field. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.isRequired">IsRequired</a></code> | <code>object</code> | Whether this is a required field. Defaults to false. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.order">Order</a></code> | <code>double</code> | The order of this field with respect to other fields in this tag template. |

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.fieldId"></a>

```csharp
public string FieldId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.type"></a>

```csharp
public DataCatalogTagTemplateFieldsType Type { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#type DataCatalogTagTemplate#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#description DataCatalogTagTemplate#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.isRequired"></a>

```csharp
public object IsRequired { get; set; }
```

- *Type:* object

Whether this is a required field. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#is_required DataCatalogTagTemplate#is_required}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

The order of this field with respect to other fields in this tag template.

A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#order DataCatalogTagTemplate#order}

---

### DataCatalogTagTemplateFieldsType <a name="DataCatalogTagTemplateFieldsType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsType {
    DataCatalogTagTemplateFieldsTypeEnumType EnumType = null,
    string PrimitiveType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.enumType">EnumType</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | enum_type block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.primitiveType">PrimitiveType</a></code> | <code>string</code> | Represents primitive types - string, bool etc. |

---

##### `EnumType`<sup>Optional</sup> <a name="EnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.enumType"></a>

```csharp
public DataCatalogTagTemplateFieldsTypeEnumType EnumType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

enum_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#enum_type DataCatalogTagTemplate#enum_type}

---

##### `PrimitiveType`<sup>Optional</sup> <a name="PrimitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.primitiveType"></a>

```csharp
public string PrimitiveType { get; set; }
```

- *Type:* string

Represents primitive types - string, bool etc.

Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#primitive_type DataCatalogTagTemplate#primitive_type}

---

### DataCatalogTagTemplateFieldsTypeEnumType <a name="DataCatalogTagTemplateFieldsTypeEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsTypeEnumType {
    object AllowedValues
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues">AllowedValues</a></code> | <code>object</code> | allowed_values block. |

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues"></a>

```csharp
public object AllowedValues { get; set; }
```

- *Type:* object

allowed_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#allowed_values DataCatalogTagTemplate#allowed_values}

---

### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues {
    string DisplayName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the enum value. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

### DataCatalogTagTemplateTimeouts <a name="DataCatalogTagTemplateTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#create DataCatalogTagTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#update DataCatalogTagTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#create DataCatalogTagTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/data_catalog_tag_template#update DataCatalogTagTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTagTemplateFieldsList <a name="DataCatalogTagTemplateFieldsList" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get"></a>

```csharp
private DataCatalogTagTemplateFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCatalogTagTemplateFieldsOutputReference <a name="DataCatalogTagTemplateFieldsOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType">PutType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutType` <a name="PutType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType"></a>

```csharp
private void PutType(DataCatalogTagTemplateFieldsType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetIsRequired"></a>

```csharp
private void ResetIsRequired()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.type">Type</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference">DataCatalogTagTemplateFieldsTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequired">IsRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.type"></a>

```csharp
public DataCatalogTagTemplateFieldsTypeOutputReference Type { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference">DataCatalogTagTemplateFieldsTypeOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput"></a>

```csharp
public string FieldIdInput { get; }
```

- *Type:* string

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput"></a>

```csharp
public object IsRequiredInput { get; }
```

- *Type:* object

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.typeInput"></a>

```csharp
public DataCatalogTagTemplateFieldsType TypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldId"></a>

```csharp
public string FieldId { get; }
```

- *Type:* string

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequired"></a>

```csharp
public object IsRequired { get; }
```

- *Type:* object

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get"></a>

```csharp
private DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference <a name="DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues">PutAllowedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedValues` <a name="PutAllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues"></a>

```csharp
private void PutAllowedValues(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues">AllowedValues</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues"></a>

```csharp
public DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList AllowedValues { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a>

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput"></a>

```csharp
public object AllowedValuesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue"></a>

```csharp
public DataCatalogTagTemplateFieldsTypeEnumType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---


### DataCatalogTagTemplateFieldsTypeOutputReference <a name="DataCatalogTagTemplateFieldsTypeOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateFieldsTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType">PutEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType">ResetEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType">ResetPrimitiveType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumType` <a name="PutEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType"></a>

```csharp
private void PutEnumType(DataCatalogTagTemplateFieldsTypeEnumType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `ResetEnumType` <a name="ResetEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType"></a>

```csharp
private void ResetEnumType()
```

##### `ResetPrimitiveType` <a name="ResetPrimitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType"></a>

```csharp
private void ResetPrimitiveType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumType">EnumType</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput">EnumTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput">PrimitiveTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType">PrimitiveType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnumType`<sup>Required</sup> <a name="EnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumType"></a>

```csharp
public DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference EnumType { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a>

---

##### `EnumTypeInput`<sup>Optional</sup> <a name="EnumTypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput"></a>

```csharp
public DataCatalogTagTemplateFieldsTypeEnumType EnumTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `PrimitiveTypeInput`<sup>Optional</sup> <a name="PrimitiveTypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput"></a>

```csharp
public string PrimitiveTypeInput { get; }
```

- *Type:* string

---

##### `PrimitiveType`<sup>Required</sup> <a name="PrimitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType"></a>

```csharp
public string PrimitiveType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue"></a>

```csharp
public DataCatalogTagTemplateFieldsType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---


### DataCatalogTagTemplateTimeoutsOutputReference <a name="DataCatalogTagTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataCatalogTagTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



