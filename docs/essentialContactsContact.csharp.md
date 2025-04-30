# `essentialContactsContact` Submodule <a name="`essentialContactsContact` Submodule" id="@cdktf/provider-google.essentialContactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EssentialContactsContact <a name="EssentialContactsContact" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact google_essential_contacts_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EssentialContactsContact(Construct Scope, string Id, EssentialContactsContactConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig">EssentialContactsContactConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig">EssentialContactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts"></a>

```csharp
private void PutTimeouts(EssentialContactsContactTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EssentialContactsContact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EssentialContactsContact.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EssentialContactsContact.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EssentialContactsContact.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EssentialContactsContact.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EssentialContactsContact resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EssentialContactsContact to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EssentialContactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EssentialContactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference">EssentialContactsContactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTagInput">LanguageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptionsInput">NotificationCategorySubscriptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTag">LanguageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptions">NotificationCategorySubscriptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeouts"></a>

```csharp
public EssentialContactsContactTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference">EssentialContactsContactTimeoutsOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageTagInput`<sup>Optional</sup> <a name="LanguageTagInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTagInput"></a>

```csharp
public string LanguageTagInput { get; }
```

- *Type:* string

---

##### `NotificationCategorySubscriptionsInput`<sup>Optional</sup> <a name="NotificationCategorySubscriptionsInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptionsInput"></a>

```csharp
public string[] NotificationCategorySubscriptionsInput { get; }
```

- *Type:* string[]

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LanguageTag`<sup>Required</sup> <a name="LanguageTag" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTag"></a>

```csharp
public string LanguageTag { get; }
```

- *Type:* string

---

##### `NotificationCategorySubscriptions`<sup>Required</sup> <a name="NotificationCategorySubscriptions" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptions"></a>

```csharp
public string[] NotificationCategorySubscriptions { get; }
```

- *Type:* string[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EssentialContactsContactConfig <a name="EssentialContactsContactConfig" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EssentialContactsContactConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email,
    string LanguageTag,
    string[] NotificationCategorySubscriptions,
    string Parent,
    string Id = null,
    EssentialContactsContactTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.email">Email</a></code> | <code>string</code> | The email address to send notifications to. This does not need to be a Google account. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.languageTag">LanguageTag</a></code> | <code>string</code> | The preferred language for notifications, as a ISO 639-1 language code. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.notificationCategorySubscriptions">NotificationCategorySubscriptions</a></code> | <code>string[]</code> | The categories of notifications that the contact will receive communications for. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.parent">Parent</a></code> | <code>string</code> | The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#id EssentialContactsContact#id}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address to send notifications to. This does not need to be a Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#email EssentialContactsContact#email}

---

##### `LanguageTag`<sup>Required</sup> <a name="LanguageTag" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.languageTag"></a>

```csharp
public string LanguageTag { get; set; }
```

- *Type:* string

The preferred language for notifications, as a ISO 639-1 language code.

See Supported languages for a list of supported languages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#language_tag EssentialContactsContact#language_tag}

---

##### `NotificationCategorySubscriptions`<sup>Required</sup> <a name="NotificationCategorySubscriptions" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.notificationCategorySubscriptions"></a>

```csharp
public string[] NotificationCategorySubscriptions { get; set; }
```

- *Type:* string[]

The categories of notifications that the contact will receive communications for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#notification_category_subscriptions EssentialContactsContact#notification_category_subscriptions}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#parent EssentialContactsContact#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#id EssentialContactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.timeouts"></a>

```csharp
public EssentialContactsContactTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#timeouts EssentialContactsContact#timeouts}

---

### EssentialContactsContactTimeouts <a name="EssentialContactsContactTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EssentialContactsContactTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#create EssentialContactsContact#create}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#delete EssentialContactsContact#delete}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#update EssentialContactsContact#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#create EssentialContactsContact#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#delete EssentialContactsContact#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/essential_contacts_contact#update EssentialContactsContact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EssentialContactsContactTimeoutsOutputReference <a name="EssentialContactsContactTimeoutsOutputReference" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EssentialContactsContactTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



