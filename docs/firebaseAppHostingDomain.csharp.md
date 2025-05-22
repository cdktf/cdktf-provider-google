# `firebaseAppHostingDomain` Submodule <a name="`firebaseAppHostingDomain` Submodule" id="@cdktf/provider-google.firebaseAppHostingDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingDomain <a name="FirebaseAppHostingDomain" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain google_firebase_app_hosting_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomain(Construct Scope, string Id, FirebaseAppHostingDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig">FirebaseAppHostingDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig">FirebaseAppHostingDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putServe">PutServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetServe">ResetServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServe` <a name="PutServe" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putServe"></a>

```csharp
private void PutServe(FirebaseAppHostingDomainServe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putServe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(FirebaseAppHostingDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts">FirebaseAppHostingDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServe` <a name="ResetServe" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetServe"></a>

```csharp
private void ResetServe()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppHostingDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppHostingDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.customDomainStatus">CustomDomainStatus</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList">FirebaseAppHostingDomainCustomDomainStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.purgeTime">PurgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serve">Serve</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference">FirebaseAppHostingDomainServeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference">FirebaseAppHostingDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serveInput">ServeInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomDomainStatus`<sup>Required</sup> <a name="CustomDomainStatus" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.customDomainStatus"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusList CustomDomainStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList">FirebaseAppHostingDomainCustomDomainStatusList</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.purgeTime"></a>

```csharp
public string PurgeTime { get; }
```

- *Type:* string

---

##### `Serve`<sup>Required</sup> <a name="Serve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serve"></a>

```csharp
public FirebaseAppHostingDomainServeOutputReference Serve { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference">FirebaseAppHostingDomainServeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeouts"></a>

```csharp
public FirebaseAppHostingDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference">FirebaseAppHostingDomainTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServeInput`<sup>Optional</sup> <a name="ServeInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serveInput"></a>

```csharp
public FirebaseAppHostingDomainServe ServeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingDomainConfig <a name="FirebaseAppHostingDomainConfig" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string DomainId,
    string Location,
    string Id = null,
    string Project = null,
    FirebaseAppHostingDomainServe Serve = null,
    FirebaseAppHostingDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.backend">Backend</a></code> | <code>string</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.domainId">DomainId</a></code> | <code>string</code> | Id of the domain to create. Must be a valid domain name, such as "foo.com". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.location">Location</a></code> | <code>string</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#id FirebaseAppHostingDomain#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#project FirebaseAppHostingDomain#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.serve">Serve</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a></code> | serve block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts">FirebaseAppHostingDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#backend FirebaseAppHostingDomain#backend}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Id of the domain to create. Must be a valid domain name, such as "foo.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#domain_id FirebaseAppHostingDomain#domain_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#location FirebaseAppHostingDomain#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#id FirebaseAppHostingDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#project FirebaseAppHostingDomain#project}.

---

##### `Serve`<sup>Optional</sup> <a name="Serve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.serve"></a>

```csharp
public FirebaseAppHostingDomainServe Serve { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

serve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#serve FirebaseAppHostingDomain#serve}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.timeouts"></a>

```csharp
public FirebaseAppHostingDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts">FirebaseAppHostingDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#timeouts FirebaseAppHostingDomain#timeouts}

---

### FirebaseAppHostingDomainCustomDomainStatus <a name="FirebaseAppHostingDomainCustomDomainStatus" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatus {

};
```


### FirebaseAppHostingDomainCustomDomainStatusIssues <a name="FirebaseAppHostingDomainCustomDomainStatusIssues" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusIssues {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError {

};
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords {

};
```


### FirebaseAppHostingDomainServe <a name="FirebaseAppHostingDomainServe" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainServe {
    FirebaseAppHostingDomainServeRedirect Redirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a></code> | redirect block. |

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe.property.redirect"></a>

```csharp
public FirebaseAppHostingDomainServeRedirect Redirect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#redirect FirebaseAppHostingDomain#redirect}

---

### FirebaseAppHostingDomainServeRedirect <a name="FirebaseAppHostingDomainServeRedirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainServeRedirect {
    string Uri,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.uri">Uri</a></code> | <code>string</code> | The URI of the redirect's intended destination. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.status">Status</a></code> | <code>string</code> | The status code to use in a redirect response. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the redirect's intended destination.

This URI will be
prepended to the original request path. URI without a scheme are
assumed to be HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#uri FirebaseAppHostingDomain#uri}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status code to use in a redirect response.

Must be a valid HTTP 3XX
status code. Defaults to 302 if not present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#status FirebaseAppHostingDomain#status}

---

### FirebaseAppHostingDomainTimeouts <a name="FirebaseAppHostingDomainTimeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#create FirebaseAppHostingDomain#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#delete FirebaseAppHostingDomain#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#update FirebaseAppHostingDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#create FirebaseAppHostingDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#delete FirebaseAppHostingDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/firebase_app_hosting_domain#update FirebaseAppHostingDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingDomainCustomDomainStatusIssuesList <a name="FirebaseAppHostingDomainCustomDomainStatusIssuesList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusIssuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues">FirebaseAppHostingDomainCustomDomainStatusIssues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusIssues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues">FirebaseAppHostingDomainCustomDomainStatusIssues</a>

---


### FirebaseAppHostingDomainCustomDomainStatusList <a name="FirebaseAppHostingDomainCustomDomainStatusList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.certState">CertState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.hostState">HostState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.issues">Issues</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList">FirebaseAppHostingDomainCustomDomainStatusIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.ownershipState">OwnershipState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.requiredDnsUpdates">RequiredDnsUpdates</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus">FirebaseAppHostingDomainCustomDomainStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertState`<sup>Required</sup> <a name="CertState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.certState"></a>

```csharp
public string CertState { get; }
```

- *Type:* string

---

##### `HostState`<sup>Required</sup> <a name="HostState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.hostState"></a>

```csharp
public string HostState { get; }
```

- *Type:* string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.issues"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusIssuesList Issues { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList">FirebaseAppHostingDomainCustomDomainStatusIssuesList</a>

---

##### `OwnershipState`<sup>Required</sup> <a name="OwnershipState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.ownershipState"></a>

```csharp
public string OwnershipState { get; }
```

- *Type:* string

---

##### `RequiredDnsUpdates`<sup>Required</sup> <a name="RequiredDnsUpdates" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.requiredDnsUpdates"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList RequiredDnsUpdates { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus">FirebaseAppHostingDomainCustomDomainStatus</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.checkError">CheckError</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.records">Records</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckError`<sup>Required</sup> <a name="CheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.checkError"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList CheckError { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.records"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList Records { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata">Rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.relevantState">RelevantState</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction">RequiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata"></a>

```csharp
public string Rdata { get; }
```

- *Type:* string

---

##### `RelevantState`<sup>Required</sup> <a name="RelevantState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.relevantState"></a>

```csharp
public string[] RelevantState { get; }
```

- *Type:* string[]

---

##### `RequiredAction`<sup>Required</sup> <a name="RequiredAction" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction"></a>

```csharp
public string RequiredAction { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.checkError">CheckError</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.records">Records</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckError`<sup>Required</sup> <a name="CheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.checkError"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList CheckError { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.records"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList Records { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata">Rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.relevantState">RelevantState</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction">RequiredAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata"></a>

```csharp
public string Rdata { get; }
```

- *Type:* string

---

##### `RelevantState`<sup>Required</sup> <a name="RelevantState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.relevantState"></a>

```csharp
public string[] RelevantState { get; }
```

- *Type:* string[]

---

##### `RequiredAction`<sup>Required</sup> <a name="RequiredAction" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction"></a>

```csharp
public string RequiredAction { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get"></a>

```csharp
private FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.checkTime">CheckTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.desired">Desired</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.discovered">Discovered</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckTime`<sup>Required</sup> <a name="CheckTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.checkTime"></a>

```csharp
public string CheckTime { get; }
```

- *Type:* string

---

##### `Desired`<sup>Required</sup> <a name="Desired" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.desired"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList Desired { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList</a>

---

##### `Discovered`<sup>Required</sup> <a name="Discovered" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.discovered"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList Discovered { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates</a>

---


### FirebaseAppHostingDomainServeOutputReference <a name="FirebaseAppHostingDomainServeOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainServeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.putRedirect"></a>

```csharp
private void PutRedirect(FirebaseAppHostingDomainServeRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

---

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resetRedirect"></a>

```csharp
private void ResetRedirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference">FirebaseAppHostingDomainServeRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirect"></a>

```csharp
public FirebaseAppHostingDomainServeRedirectOutputReference Redirect { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference">FirebaseAppHostingDomainServeRedirectOutputReference</a>

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirectInput"></a>

```csharp
public FirebaseAppHostingDomainServeRedirect RedirectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainServe InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

---


### FirebaseAppHostingDomainServeRedirectOutputReference <a name="FirebaseAppHostingDomainServeRedirectOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainServeRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingDomainServeRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

---


### FirebaseAppHostingDomainTimeoutsOutputReference <a name="FirebaseAppHostingDomainTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



