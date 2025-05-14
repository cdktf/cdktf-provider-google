# `appEngineApplication` Submodule <a name="`appEngineApplication` Submodule" id="@cdktf/provider-google.appEngineApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplication <a name="AppEngineApplication" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application google_app_engine_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplication(Construct Scope, string Id, AppEngineApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig">AppEngineApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig">AppEngineApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.putFeatureSettings">PutFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.putIap">PutIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetAuthDomain">ResetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetDatabaseType">ResetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetFeatureSettings">ResetFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetIap">ResetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetServingStatus">ResetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeatureSettings` <a name="PutFeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putFeatureSettings"></a>

```csharp
private void PutFeatureSettings(AppEngineApplicationFeatureSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putFeatureSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

---

##### `PutIap` <a name="PutIap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putIap"></a>

```csharp
private void PutIap(AppEngineApplicationIap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(AppEngineApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a>

---

##### `ResetAuthDomain` <a name="ResetAuthDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetAuthDomain"></a>

```csharp
private void ResetAuthDomain()
```

##### `ResetDatabaseType` <a name="ResetDatabaseType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetDatabaseType"></a>

```csharp
private void ResetDatabaseType()
```

##### `ResetFeatureSettings` <a name="ResetFeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetFeatureSettings"></a>

```csharp
private void ResetFeatureSettings()
```

##### `ResetIap` <a name="ResetIap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetIap"></a>

```csharp
private void ResetIap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServingStatus` <a name="ResetServingStatus" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetServingStatus"></a>

```csharp
private void ResetServingStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppEngineApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.codeBucket">CodeBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultBucket">DefaultBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultHostname">DefaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettings">FeatureSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference">AppEngineApplicationFeatureSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.gcrDomain">GcrDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference">AppEngineApplicationIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference">AppEngineApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.urlDispatchRule">UrlDispatchRule</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList">AppEngineApplicationUrlDispatchRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomainInput">AuthDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettingsInput">FeatureSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iapInput">IapInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationIdInput">LocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatusInput">ServingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomain">AuthDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationId">LocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatus">ServingStatus</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `CodeBucket`<sup>Required</sup> <a name="CodeBucket" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.codeBucket"></a>

```csharp
public string CodeBucket { get; }
```

- *Type:* string

---

##### `DefaultBucket`<sup>Required</sup> <a name="DefaultBucket" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultBucket"></a>

```csharp
public string DefaultBucket { get; }
```

- *Type:* string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultHostname"></a>

```csharp
public string DefaultHostname { get; }
```

- *Type:* string

---

##### `FeatureSettings`<sup>Required</sup> <a name="FeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettings"></a>

```csharp
public AppEngineApplicationFeatureSettingsOutputReference FeatureSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference">AppEngineApplicationFeatureSettingsOutputReference</a>

---

##### `GcrDomain`<sup>Required</sup> <a name="GcrDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.gcrDomain"></a>

```csharp
public string GcrDomain { get; }
```

- *Type:* string

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iap"></a>

```csharp
public AppEngineApplicationIapOutputReference Iap { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference">AppEngineApplicationIapOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeouts"></a>

```csharp
public AppEngineApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference">AppEngineApplicationTimeoutsOutputReference</a>

---

##### `UrlDispatchRule`<sup>Required</sup> <a name="UrlDispatchRule" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.urlDispatchRule"></a>

```csharp
public AppEngineApplicationUrlDispatchRuleList UrlDispatchRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList">AppEngineApplicationUrlDispatchRuleList</a>

---

##### `AuthDomainInput`<sup>Optional</sup> <a name="AuthDomainInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomainInput"></a>

```csharp
public string AuthDomainInput { get; }
```

- *Type:* string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseTypeInput"></a>

```csharp
public string DatabaseTypeInput { get; }
```

- *Type:* string

---

##### `FeatureSettingsInput`<sup>Optional</sup> <a name="FeatureSettingsInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettingsInput"></a>

```csharp
public AppEngineApplicationFeatureSettings FeatureSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

---

##### `IapInput`<sup>Optional</sup> <a name="IapInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iapInput"></a>

```csharp
public AppEngineApplicationIap IapInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationIdInput"></a>

```csharp
public string LocationIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServingStatusInput`<sup>Optional</sup> <a name="ServingStatusInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatusInput"></a>

```csharp
public string ServingStatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomain"></a>

```csharp
public string AuthDomain { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationId"></a>

```csharp
public string LocationId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServingStatus`<sup>Required</sup> <a name="ServingStatus" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatus"></a>

```csharp
public string ServingStatus { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationConfig <a name="AppEngineApplicationConfig" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LocationId,
    string AuthDomain = null,
    string DatabaseType = null,
    AppEngineApplicationFeatureSettings FeatureSettings = null,
    AppEngineApplicationIap Iap = null,
    string Id = null,
    string Project = null,
    string ServingStatus = null,
    AppEngineApplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.locationId">LocationId</a></code> | <code>string</code> | The location to serve the app from. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.authDomain">AuthDomain</a></code> | <code>string</code> | The domain to authenticate users with when using App Engine's User API. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.databaseType">DatabaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#database_type AppEngineApplication#database_type}. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.featureSettings">FeatureSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a></code> | feature_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#id AppEngineApplication#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.project">Project</a></code> | <code>string</code> | The project ID to create the application under. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.servingStatus">ServingStatus</a></code> | <code>string</code> | The serving status of the app. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.locationId"></a>

```csharp
public string LocationId { get; set; }
```

- *Type:* string

The location to serve the app from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#location_id AppEngineApplication#location_id}

---

##### `AuthDomain`<sup>Optional</sup> <a name="AuthDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.authDomain"></a>

```csharp
public string AuthDomain { get; set; }
```

- *Type:* string

The domain to authenticate users with when using App Engine's User API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#auth_domain AppEngineApplication#auth_domain}

---

##### `DatabaseType`<sup>Optional</sup> <a name="DatabaseType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.databaseType"></a>

```csharp
public string DatabaseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#database_type AppEngineApplication#database_type}.

---

##### `FeatureSettings`<sup>Optional</sup> <a name="FeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.featureSettings"></a>

```csharp
public AppEngineApplicationFeatureSettings FeatureSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

feature_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#feature_settings AppEngineApplication#feature_settings}

---

##### `Iap`<sup>Optional</sup> <a name="Iap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.iap"></a>

```csharp
public AppEngineApplicationIap Iap { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#iap AppEngineApplication#iap}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#id AppEngineApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project ID to create the application under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#project AppEngineApplication#project}

---

##### `ServingStatus`<sup>Optional</sup> <a name="ServingStatus" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.servingStatus"></a>

```csharp
public string ServingStatus { get; set; }
```

- *Type:* string

The serving status of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#serving_status AppEngineApplication#serving_status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.timeouts"></a>

```csharp
public AppEngineApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#timeouts AppEngineApplication#timeouts}

---

### AppEngineApplicationFeatureSettings <a name="AppEngineApplicationFeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationFeatureSettings {
    object SplitHealthChecks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings.property.splitHealthChecks">SplitHealthChecks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#split_health_checks AppEngineApplication#split_health_checks}. |

---

##### `SplitHealthChecks`<sup>Required</sup> <a name="SplitHealthChecks" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings.property.splitHealthChecks"></a>

```csharp
public object SplitHealthChecks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#split_health_checks AppEngineApplication#split_health_checks}.

---

### AppEngineApplicationIap <a name="AppEngineApplicationIap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationIap {
    string Oauth2ClientId,
    string Oauth2ClientSecret,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>string</code> | OAuth2 client ID to use for the authentication flow. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>string</code> | OAuth2 client secret to use for the authentication flow. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.enabled">Enabled</a></code> | <code>object</code> | Adapted for use with the app. |

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientId"></a>

```csharp
public string Oauth2ClientId { get; set; }
```

- *Type:* string

OAuth2 client ID to use for the authentication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#oauth2_client_id AppEngineApplication#oauth2_client_id}

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientSecret"></a>

```csharp
public string Oauth2ClientSecret { get; set; }
```

- *Type:* string

OAuth2 client secret to use for the authentication flow.

The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#oauth2_client_secret AppEngineApplication#oauth2_client_secret}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Adapted for use with the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#enabled AppEngineApplication#enabled}

---

### AppEngineApplicationTimeouts <a name="AppEngineApplicationTimeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#create AppEngineApplication#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#update AppEngineApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#create AppEngineApplication#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/app_engine_application#update AppEngineApplication#update}.

---

### AppEngineApplicationUrlDispatchRule <a name="AppEngineApplicationUrlDispatchRule" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationFeatureSettingsOutputReference <a name="AppEngineApplicationFeatureSettingsOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationFeatureSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecksInput">SplitHealthChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecks">SplitHealthChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SplitHealthChecksInput`<sup>Optional</sup> <a name="SplitHealthChecksInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecksInput"></a>

```csharp
public object SplitHealthChecksInput { get; }
```

- *Type:* object

---

##### `SplitHealthChecks`<sup>Required</sup> <a name="SplitHealthChecks" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecks"></a>

```csharp
public object SplitHealthChecks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.internalValue"></a>

```csharp
public AppEngineApplicationFeatureSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

---


### AppEngineApplicationIapOutputReference <a name="AppEngineApplicationIapOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationIapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientIdInput">Oauth2ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretInput">Oauth2ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretSha256"></a>

```csharp
public string Oauth2ClientSecretSha256 { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Oauth2ClientIdInput`<sup>Optional</sup> <a name="Oauth2ClientIdInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientIdInput"></a>

```csharp
public string Oauth2ClientIdInput { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecretInput`<sup>Optional</sup> <a name="Oauth2ClientSecretInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretInput"></a>

```csharp
public string Oauth2ClientSecretInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientId"></a>

```csharp
public string Oauth2ClientId { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecret"></a>

```csharp
public string Oauth2ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.internalValue"></a>

```csharp
public AppEngineApplicationIap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

---


### AppEngineApplicationTimeoutsOutputReference <a name="AppEngineApplicationTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppEngineApplicationUrlDispatchRuleList <a name="AppEngineApplicationUrlDispatchRuleList" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.get"></a>

```csharp
private AppEngineApplicationUrlDispatchRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AppEngineApplicationUrlDispatchRuleOutputReference <a name="AppEngineApplicationUrlDispatchRuleOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule">AppEngineApplicationUrlDispatchRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.internalValue"></a>

```csharp
public AppEngineApplicationUrlDispatchRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule">AppEngineApplicationUrlDispatchRule</a>

---



