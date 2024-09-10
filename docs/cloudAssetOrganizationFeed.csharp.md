# `cloudAssetOrganizationFeed` Submodule <a name="`cloudAssetOrganizationFeed` Submodule" id="@cdktf/provider-google.cloudAssetOrganizationFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetOrganizationFeed <a name="CloudAssetOrganizationFeed" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed google_cloud_asset_organization_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeed(Construct Scope, string Id, CloudAssetOrganizationFeedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig">CloudAssetOrganizationFeedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig">CloudAssetOrganizationFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig">PutFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetNames">ResetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition"></a>

```csharp
private void PutCondition(CloudAssetOrganizationFeedCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---

##### `PutFeedOutputConfig` <a name="PutFeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig"></a>

```csharp
private void PutFeedOutputConfig(CloudAssetOrganizationFeedFeedOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudAssetOrganizationFeedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>

---

##### `ResetAssetNames` <a name="ResetAssetNames" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetNames"></a>

```csharp
private void ResetAssetNames()
```

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetTypes"></a>

```csharp
private void ResetAssetTypes()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetOrganizationFeed.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetOrganizationFeed.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetOrganizationFeed.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudAssetOrganizationFeed.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAssetOrganizationFeed to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAssetOrganizationFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudAssetOrganizationFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference">CloudAssetOrganizationFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference">CloudAssetOrganizationFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference">CloudAssetOrganizationFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNamesInput">AssetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypesInput">AssetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProjectInput">BillingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedIdInput">FeedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfigInput">FeedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNames">AssetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProject">BillingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedId">FeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.condition"></a>

```csharp
public CloudAssetOrganizationFeedConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference">CloudAssetOrganizationFeedConditionOutputReference</a>

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfig"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfigOutputReference FeedOutputConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference">CloudAssetOrganizationFeedFeedOutputConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeouts"></a>

```csharp
public CloudAssetOrganizationFeedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference">CloudAssetOrganizationFeedTimeoutsOutputReference</a>

---

##### `AssetNamesInput`<sup>Optional</sup> <a name="AssetNamesInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNamesInput"></a>

```csharp
public string[] AssetNamesInput { get; }
```

- *Type:* string[]

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypesInput"></a>

```csharp
public string[] AssetTypesInput { get; }
```

- *Type:* string[]

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProjectInput"></a>

```csharp
public string BillingProjectInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.conditionInput"></a>

```csharp
public CloudAssetOrganizationFeedCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `FeedIdInput`<sup>Optional</sup> <a name="FeedIdInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedIdInput"></a>

```csharp
public string FeedIdInput { get; }
```

- *Type:* string

---

##### `FeedOutputConfigInput`<sup>Optional</sup> <a name="FeedOutputConfigInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfigInput"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfig FeedOutputConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AssetNames`<sup>Required</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNames"></a>

```csharp
public string[] AssetNames { get; }
```

- *Type:* string[]

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; }
```

- *Type:* string[]

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProject"></a>

```csharp
public string BillingProject { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedId"></a>

```csharp
public string FeedId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetOrganizationFeedCondition <a name="CloudAssetOrganizationFeedCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#expression CloudAssetOrganizationFeed#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#description CloudAssetOrganizationFeed#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#location CloudAssetOrganizationFeed#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#title CloudAssetOrganizationFeed#title}

---

### CloudAssetOrganizationFeedConfig <a name="CloudAssetOrganizationFeedConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingProject,
    string FeedId,
    CloudAssetOrganizationFeedFeedOutputConfig FeedOutputConfig,
    string OrgId,
    string[] AssetNames = null,
    string[] AssetTypes = null,
    CloudAssetOrganizationFeedCondition Condition = null,
    string ContentType = null,
    string Id = null,
    CloudAssetOrganizationFeedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.billingProject">BillingProject</a></code> | <code>string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedId">FeedId</a></code> | <code>string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.orgId">OrgId</a></code> | <code>string</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetNames">AssetNames</a></code> | <code>string[]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.contentType">ContentType</a></code> | <code>string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.billingProject"></a>

```csharp
public string BillingProject { get; set; }
```

- *Type:* string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#billing_project CloudAssetOrganizationFeed#billing_project}

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedId"></a>

```csharp
public string FeedId { get; set; }
```

- *Type:* string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#feed_id CloudAssetOrganizationFeed#feed_id}

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedOutputConfig"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfig FeedOutputConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#feed_output_config CloudAssetOrganizationFeed#feed_output_config}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#org_id CloudAssetOrganizationFeed#org_id}

---

##### `AssetNames`<sup>Optional</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetNames"></a>

```csharp
public string[] AssetNames { get; set; }
```

- *Type:* string[]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#asset_names CloudAssetOrganizationFeed#asset_names}

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetTypes"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#asset_types CloudAssetOrganizationFeed#asset_types}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.condition"></a>

```csharp
public CloudAssetOrganizationFeedCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#condition CloudAssetOrganizationFeed#condition}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#content_type CloudAssetOrganizationFeed#content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.timeouts"></a>

```csharp
public CloudAssetOrganizationFeedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#timeouts CloudAssetOrganizationFeed#timeouts}

---

### CloudAssetOrganizationFeedFeedOutputConfig <a name="CloudAssetOrganizationFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedFeedOutputConfig {
    CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination PubsubDestination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination PubsubDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#pubsub_destination CloudAssetOrganizationFeed#pubsub_destination}

---

### CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination <a name="CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination {
    string Topic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic">Topic</a></code> | <code>string</code> | Destination on Cloud Pubsub topic. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#topic CloudAssetOrganizationFeed#topic}

---

### CloudAssetOrganizationFeedTimeouts <a name="CloudAssetOrganizationFeedTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetOrganizationFeedConditionOutputReference <a name="CloudAssetOrganizationFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.internalValue"></a>

```csharp
public CloudAssetOrganizationFeedCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---


### CloudAssetOrganizationFeedFeedOutputConfigOutputReference <a name="CloudAssetOrganizationFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedFeedOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```csharp
private void PutPubsubDestination(CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference PubsubDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination PubsubDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---


### CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```csharp
public CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetOrganizationFeedTimeoutsOutputReference <a name="CloudAssetOrganizationFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudAssetOrganizationFeedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



