# `cloudAssetProjectFeed` Submodule <a name="`cloudAssetProjectFeed` Submodule" id="@cdktf/provider-google.cloudAssetProjectFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetProjectFeed <a name="CloudAssetProjectFeed" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed google_cloud_asset_project_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeed(Construct Scope, string Id, CloudAssetProjectFeedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig">CloudAssetProjectFeedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig">CloudAssetProjectFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig">PutFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetNames">ResetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetBillingProject">ResetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition"></a>

```csharp
private void PutCondition(CloudAssetProjectFeedCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---

##### `PutFeedOutputConfig` <a name="PutFeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig"></a>

```csharp
private void PutFeedOutputConfig(CloudAssetProjectFeedFeedOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudAssetProjectFeedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

---

##### `ResetAssetNames` <a name="ResetAssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetNames"></a>

```csharp
private void ResetAssetNames()
```

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetTypes"></a>

```csharp
private void ResetAssetTypes()
```

##### `ResetBillingProject` <a name="ResetBillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetBillingProject"></a>

```csharp
private void ResetBillingProject()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAssetProjectFeed resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetProjectFeed.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetProjectFeed.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetProjectFeed.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetProjectFeed.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudAssetProjectFeed resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAssetProjectFeed to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAssetProjectFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudAssetProjectFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference">CloudAssetProjectFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference">CloudAssetProjectFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference">CloudAssetProjectFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNamesInput">AssetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypesInput">AssetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProjectInput">BillingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedIdInput">FeedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfigInput">FeedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNames">AssetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProject">BillingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedId">FeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.condition"></a>

```csharp
public CloudAssetProjectFeedConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference">CloudAssetProjectFeedConditionOutputReference</a>

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfig"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfigOutputReference FeedOutputConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference">CloudAssetProjectFeedFeedOutputConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeouts"></a>

```csharp
public CloudAssetProjectFeedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference">CloudAssetProjectFeedTimeoutsOutputReference</a>

---

##### `AssetNamesInput`<sup>Optional</sup> <a name="AssetNamesInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNamesInput"></a>

```csharp
public string[] AssetNamesInput { get; }
```

- *Type:* string[]

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypesInput"></a>

```csharp
public string[] AssetTypesInput { get; }
```

- *Type:* string[]

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProjectInput"></a>

```csharp
public string BillingProjectInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.conditionInput"></a>

```csharp
public CloudAssetProjectFeedCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `FeedIdInput`<sup>Optional</sup> <a name="FeedIdInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedIdInput"></a>

```csharp
public string FeedIdInput { get; }
```

- *Type:* string

---

##### `FeedOutputConfigInput`<sup>Optional</sup> <a name="FeedOutputConfigInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfigInput"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfig FeedOutputConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AssetNames`<sup>Required</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNames"></a>

```csharp
public string[] AssetNames { get; }
```

- *Type:* string[]

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; }
```

- *Type:* string[]

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProject"></a>

```csharp
public string BillingProject { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedId"></a>

```csharp
public string FeedId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetProjectFeedCondition <a name="CloudAssetProjectFeedCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#expression CloudAssetProjectFeed#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#description CloudAssetProjectFeed#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#location CloudAssetProjectFeed#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#title CloudAssetProjectFeed#title}

---

### CloudAssetProjectFeedConfig <a name="CloudAssetProjectFeedConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FeedId,
    CloudAssetProjectFeedFeedOutputConfig FeedOutputConfig,
    string[] AssetNames = null,
    string[] AssetTypes = null,
    string BillingProject = null,
    CloudAssetProjectFeedCondition Condition = null,
    string ContentType = null,
    string Id = null,
    string Project = null,
    CloudAssetProjectFeedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedId">FeedId</a></code> | <code>string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetNames">AssetNames</a></code> | <code>string[]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.billingProject">BillingProject</a></code> | <code>string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.contentType">ContentType</a></code> | <code>string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#id CloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#project CloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedId"></a>

```csharp
public string FeedId { get; set; }
```

- *Type:* string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#feed_id CloudAssetProjectFeed#feed_id}

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedOutputConfig"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfig FeedOutputConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#feed_output_config CloudAssetProjectFeed#feed_output_config}

---

##### `AssetNames`<sup>Optional</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetNames"></a>

```csharp
public string[] AssetNames { get; set; }
```

- *Type:* string[]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#asset_names CloudAssetProjectFeed#asset_names}

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; set; }
```

- *Type:* string[]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#asset_types CloudAssetProjectFeed#asset_types}

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.billingProject"></a>

```csharp
public string BillingProject { get; set; }
```

- *Type:* string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#billing_project CloudAssetProjectFeed#billing_project}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.condition"></a>

```csharp
public CloudAssetProjectFeedCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#condition CloudAssetProjectFeed#condition}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#content_type CloudAssetProjectFeed#content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#id CloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#project CloudAssetProjectFeed#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.timeouts"></a>

```csharp
public CloudAssetProjectFeedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#timeouts CloudAssetProjectFeed#timeouts}

---

### CloudAssetProjectFeedFeedOutputConfig <a name="CloudAssetProjectFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedFeedOutputConfig {
    CloudAssetProjectFeedFeedOutputConfigPubsubDestination PubsubDestination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfigPubsubDestination PubsubDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#pubsub_destination CloudAssetProjectFeed#pubsub_destination}

---

### CloudAssetProjectFeedFeedOutputConfigPubsubDestination <a name="CloudAssetProjectFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedFeedOutputConfigPubsubDestination {
    string Topic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic">Topic</a></code> | <code>string</code> | Destination on Cloud Pubsub topic. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#topic CloudAssetProjectFeed#topic}

---

### CloudAssetProjectFeedTimeouts <a name="CloudAssetProjectFeedTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#create CloudAssetProjectFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#update CloudAssetProjectFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#create CloudAssetProjectFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_asset_project_feed#update CloudAssetProjectFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetProjectFeedConditionOutputReference <a name="CloudAssetProjectFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.internalValue"></a>

```csharp
public CloudAssetProjectFeedCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---


### CloudAssetProjectFeedFeedOutputConfigOutputReference <a name="CloudAssetProjectFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedFeedOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```csharp
private void PutPubsubDestination(CloudAssetProjectFeedFeedOutputConfigPubsubDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference PubsubDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfigPubsubDestination PubsubDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---


### CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```csharp
public CloudAssetProjectFeedFeedOutputConfigPubsubDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetProjectFeedTimeoutsOutputReference <a name="CloudAssetProjectFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetProjectFeedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



