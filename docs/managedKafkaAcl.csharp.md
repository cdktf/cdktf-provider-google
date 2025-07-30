# `managedKafkaAcl` Submodule <a name="`managedKafkaAcl` Submodule" id="@cdktf/provider-google.managedKafkaAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaAcl <a name="ManagedKafkaAcl" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl google_managed_kafka_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAcl(Construct Scope, string Id, ManagedKafkaAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig">ManagedKafkaAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig">ManagedKafkaAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putAclEntries">PutAclEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAclEntries` <a name="PutAclEntries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putAclEntries"></a>

```csharp
private void PutAclEntries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putAclEntries.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagedKafkaAclTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ManagedKafkaAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ManagedKafkaAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ManagedKafkaAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ManagedKafkaAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedKafkaAcl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntries">AclEntries</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList">ManagedKafkaAclAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference">ManagedKafkaAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntriesInput">AclEntriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclIdInput">AclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclId">AclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AclEntries`<sup>Required</sup> <a name="AclEntries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntries"></a>

```csharp
public ManagedKafkaAclAclEntriesList AclEntries { get; }
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList">ManagedKafkaAclAclEntriesList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeouts"></a>

```csharp
public ManagedKafkaAclTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference">ManagedKafkaAclTimeoutsOutputReference</a>

---

##### `AclEntriesInput`<sup>Optional</sup> <a name="AclEntriesInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclEntriesInput"></a>

```csharp
public object AclEntriesInput { get; }
```

- *Type:* object

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclIdInput"></a>

```csharp
public string AclIdInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.aclId"></a>

```csharp
public string AclId { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaAclAclEntries <a name="ManagedKafkaAclAclEntries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAclAclEntries {
    string Operation,
    string Principal,
    string Host = null,
    string PermissionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.operation">Operation</a></code> | <code>string</code> | The operation type. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.principal">Principal</a></code> | <code>string</code> | The principal. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.host">Host</a></code> | <code>string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.permissionType">PermissionType</a></code> | <code>string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#operation ManagedKafkaAcl#operation}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

The principal.

Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#principal ManagedKafkaAcl#principal}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#host ManagedKafkaAcl#host}

---

##### `PermissionType`<sup>Optional</sup> <a name="PermissionType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntries.property.permissionType"></a>

```csharp
public string PermissionType { get; set; }
```

- *Type:* string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#permission_type ManagedKafkaAcl#permission_type}

---

### ManagedKafkaAclConfig <a name="ManagedKafkaAclConfig" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AclEntries,
    string AclId,
    string Cluster,
    string Location,
    string Id = null,
    string Project = null,
    ManagedKafkaAclTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclEntries">AclEntries</a></code> | <code>object</code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclId">AclId</a></code> | <code>string</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.cluster">Cluster</a></code> | <code>string</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.location">Location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#id ManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#project ManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AclEntries`<sup>Required</sup> <a name="AclEntries" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclEntries"></a>

```csharp
public object AclEntries { get; set; }
```

- *Type:* object

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#acl_entries ManagedKafkaAcl#acl_entries}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.aclId"></a>

```csharp
public string AclId { get; set; }
```

- *Type:* string

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#acl_id ManagedKafkaAcl#acl_id}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#cluster ManagedKafkaAcl#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#location ManagedKafkaAcl#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#id ManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#project ManagedKafkaAcl#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclConfig.property.timeouts"></a>

```csharp
public ManagedKafkaAclTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts">ManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#timeouts ManagedKafkaAcl#timeouts}

---

### ManagedKafkaAclTimeouts <a name="ManagedKafkaAclTimeouts" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAclTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#create ManagedKafkaAcl#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#delete ManagedKafkaAcl#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#update ManagedKafkaAcl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#create ManagedKafkaAcl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#delete ManagedKafkaAcl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/managed_kafka_acl#update ManagedKafkaAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaAclAclEntriesList <a name="ManagedKafkaAclAclEntriesList" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAclAclEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.get"></a>

```csharp
private ManagedKafkaAclAclEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKafkaAclAclEntriesOutputReference <a name="ManagedKafkaAclAclEntriesOutputReference" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAclAclEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetPermissionType">ResetPermissionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPermissionType` <a name="ResetPermissionType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.resetPermissionType"></a>

```csharp
private void ResetPermissionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionType">PermissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput"></a>

```csharp
public string PermissionTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.permissionType"></a>

```csharp
public string PermissionType { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclAclEntriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKafkaAclTimeoutsOutputReference <a name="ManagedKafkaAclTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ManagedKafkaAclTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.managedKafkaAcl.ManagedKafkaAclTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



