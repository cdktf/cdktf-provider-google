# `siteVerificationWebResource` Submodule <a name="`siteVerificationWebResource` Submodule" id="@cdktf/provider-google.siteVerificationWebResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteVerificationWebResource <a name="SiteVerificationWebResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource google_site_verification_web_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SiteVerificationWebResource(Construct Scope, string Id, SiteVerificationWebResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig">SiteVerificationWebResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig">SiteVerificationWebResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite">PutSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSite` <a name="PutSite" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite"></a>

```csharp
private void PutSite(SiteVerificationWebResourceSite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts"></a>

```csharp
private void PutTimeouts(SiteVerificationWebResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SiteVerificationWebResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SiteVerificationWebResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SiteVerificationWebResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SiteVerificationWebResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SiteVerificationWebResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SiteVerificationWebResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteVerificationWebResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteVerificationWebResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SiteVerificationWebResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.site">Site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference">SiteVerificationWebResourceSiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference">SiteVerificationWebResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.webResourceId">WebResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.siteInput">SiteInput</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethodInput">VerificationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethod">VerificationMethod</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.site"></a>

```csharp
public SiteVerificationWebResourceSiteOutputReference Site { get; }
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference">SiteVerificationWebResourceSiteOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeouts"></a>

```csharp
public SiteVerificationWebResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference">SiteVerificationWebResourceTimeoutsOutputReference</a>

---

##### `WebResourceId`<sup>Required</sup> <a name="WebResourceId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.webResourceId"></a>

```csharp
public string WebResourceId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SiteInput`<sup>Optional</sup> <a name="SiteInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.siteInput"></a>

```csharp
public SiteVerificationWebResourceSite SiteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VerificationMethodInput`<sup>Optional</sup> <a name="VerificationMethodInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethodInput"></a>

```csharp
public string VerificationMethodInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethod"></a>

```csharp
public string VerificationMethod { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteVerificationWebResourceConfig <a name="SiteVerificationWebResourceConfig" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SiteVerificationWebResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    SiteVerificationWebResourceSite Site,
    string VerificationMethod,
    string Id = null,
    SiteVerificationWebResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.site">Site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | site block. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.verificationMethod">VerificationMethod</a></code> | <code>string</code> | The verification method for the Site Verification system to use to verify this site or domain. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.site"></a>

```csharp
public SiteVerificationWebResourceSite Site { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#site SiteVerificationWebResource#site}

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.verificationMethod"></a>

```csharp
public string VerificationMethod { get; set; }
```

- *Type:* string

The verification method for the Site Verification system to use to verify this site or domain.

Possible values: ["ANALYTICS", "DNS_CNAME", "DNS_TXT", "FILE", "META", "TAG_MANAGER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#verification_method SiteVerificationWebResource#verification_method}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.timeouts"></a>

```csharp
public SiteVerificationWebResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#timeouts SiteVerificationWebResource#timeouts}

---

### SiteVerificationWebResourceSite <a name="SiteVerificationWebResourceSite" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SiteVerificationWebResourceSite {
    string Identifier,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.identifier">Identifier</a></code> | <code>string</code> | The site identifier. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.type">Type</a></code> | <code>string</code> | The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"]. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The site identifier.

If the type is set to SITE, the identifier is a URL. If the type is
set to INET_DOMAIN, the identifier is a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#identifier SiteVerificationWebResource#identifier}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#type SiteVerificationWebResource#type}

---

### SiteVerificationWebResourceTimeouts <a name="SiteVerificationWebResourceTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SiteVerificationWebResourceTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#create SiteVerificationWebResource#create}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#delete SiteVerificationWebResource#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#create SiteVerificationWebResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/site_verification_web_resource#delete SiteVerificationWebResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteVerificationWebResourceSiteOutputReference <a name="SiteVerificationWebResourceSiteOutputReference" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SiteVerificationWebResourceSiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.internalValue"></a>

```csharp
public SiteVerificationWebResourceSite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---


### SiteVerificationWebResourceTimeoutsOutputReference <a name="SiteVerificationWebResourceTimeoutsOutputReference" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SiteVerificationWebResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



