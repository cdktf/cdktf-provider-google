# `activeDirectoryDomainTrust` Submodule <a name="`activeDirectoryDomainTrust` Submodule" id="@cdktf/provider-google.activeDirectoryDomainTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainTrust <a name="ActiveDirectoryDomainTrust" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust google_active_directory_domain_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainTrust(Construct Scope, string Id, ActiveDirectoryDomainTrustConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig">ActiveDirectoryDomainTrustConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig">ActiveDirectoryDomainTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication">ResetSelectiveAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts"></a>

```csharp
private void PutTimeouts(ActiveDirectoryDomainTrustTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSelectiveAuthentication` <a name="ResetSelectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication"></a>

```csharp
private void ResetSelectiveAuthentication()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActiveDirectoryDomainTrust resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomainTrust.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomainTrust.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomainTrust.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomainTrust.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActiveDirectoryDomainTrust resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActiveDirectoryDomainTrust to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActiveDirectoryDomainTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomainTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput">SelectiveAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput">TargetDnsIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput">TargetDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput">TrustDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput">TrustHandshakeSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput">TrustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication">SelectiveAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses">TargetDnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName">TargetDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection">TrustDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret">TrustHandshakeSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType">TrustType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainTrustTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SelectiveAuthenticationInput`<sup>Optional</sup> <a name="SelectiveAuthenticationInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput"></a>

```csharp
public object SelectiveAuthenticationInput { get; }
```

- *Type:* object

---

##### `TargetDnsIpAddressesInput`<sup>Optional</sup> <a name="TargetDnsIpAddressesInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput"></a>

```csharp
public string[] TargetDnsIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `TargetDomainNameInput`<sup>Optional</sup> <a name="TargetDomainNameInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput"></a>

```csharp
public string TargetDomainNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustDirectionInput`<sup>Optional</sup> <a name="TrustDirectionInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput"></a>

```csharp
public string TrustDirectionInput { get; }
```

- *Type:* string

---

##### `TrustHandshakeSecretInput`<sup>Optional</sup> <a name="TrustHandshakeSecretInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput"></a>

```csharp
public string TrustHandshakeSecretInput { get; }
```

- *Type:* string

---

##### `TrustTypeInput`<sup>Optional</sup> <a name="TrustTypeInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput"></a>

```csharp
public string TrustTypeInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SelectiveAuthentication`<sup>Required</sup> <a name="SelectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication"></a>

```csharp
public object SelectiveAuthentication { get; }
```

- *Type:* object

---

##### `TargetDnsIpAddresses`<sup>Required</sup> <a name="TargetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses"></a>

```csharp
public string[] TargetDnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName"></a>

```csharp
public string TargetDomainName { get; }
```

- *Type:* string

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection"></a>

```csharp
public string TrustDirection { get; }
```

- *Type:* string

---

##### `TrustHandshakeSecret`<sup>Required</sup> <a name="TrustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret"></a>

```csharp
public string TrustHandshakeSecret { get; }
```

- *Type:* string

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType"></a>

```csharp
public string TrustType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainTrustConfig <a name="ActiveDirectoryDomainTrustConfig" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainTrustConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    string[] TargetDnsIpAddresses,
    string TargetDomainName,
    string TrustDirection,
    string TrustHandshakeSecret,
    string TrustType,
    string Id = null,
    string Project = null,
    object SelectiveAuthentication = null,
    ActiveDirectoryDomainTrustTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain">Domain</a></code> | <code>string</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses">TargetDnsIpAddresses</a></code> | <code>string[]</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName">TargetDomainName</a></code> | <code>string</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection">TrustDirection</a></code> | <code>string</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret">TrustHandshakeSecret</a></code> | <code>string</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType">TrustType</a></code> | <code>string</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication">SelectiveAuthentication</a></code> | <code>object</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}

---

##### `TargetDnsIpAddresses`<sup>Required</sup> <a name="TargetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses"></a>

```csharp
public string[] TargetDnsIpAddresses { get; set; }
```

- *Type:* string[]

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName"></a>

```csharp
public string TargetDomainName { get; set; }
```

- *Type:* string

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection"></a>

```csharp
public string TrustDirection { get; set; }
```

- *Type:* string

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}

---

##### `TrustHandshakeSecret`<sup>Required</sup> <a name="TrustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret"></a>

```csharp
public string TrustHandshakeSecret { get; set; }
```

- *Type:* string

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType"></a>

```csharp
public string TrustType { get; set; }
```

- *Type:* string

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}.

---

##### `SelectiveAuthentication`<sup>Optional</sup> <a name="SelectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication"></a>

```csharp
public object SelectiveAuthentication { get; set; }
```

- *Type:* object

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainTrustTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}

---

### ActiveDirectoryDomainTrustTimeouts <a name="ActiveDirectoryDomainTrustTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainTrustTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainTrustTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainTrustTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



