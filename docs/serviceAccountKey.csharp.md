# `serviceAccountKey` Submodule <a name="`serviceAccountKey` Submodule" id="@cdktf/provider-google.serviceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccountKey <a name="ServiceAccountKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ServiceAccountKey(Construct Scope, string Id, ServiceAccountKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig">ServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig">ServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType">ResetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData">ResetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType">ResetPublicKeyType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers"></a>

```csharp
private void ResetKeepers()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetPrivateKeyType` <a name="ResetPrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType"></a>

```csharp
private void ResetPrivateKeyType()
```

##### `ResetPublicKeyData` <a name="ResetPublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData"></a>

```csharp
private void ResetPublicKeyData()
```

##### `ResetPublicKeyType` <a name="ResetPublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType"></a>

```csharp
private void ResetPublicKeyType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceAccountKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceAccountKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceAccountKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceAccountKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceAccountKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceAccountKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceAccountKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter">ValidAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore">ValidBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput">KeepersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput">PrivateKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput">PublicKeyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput">PublicKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData">PublicKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType">PublicKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `ValidAfter`<sup>Required</sup> <a name="ValidAfter" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter"></a>

```csharp
public string ValidAfter { get; }
```

- *Type:* string

---

##### `ValidBefore`<sup>Required</sup> <a name="ValidBefore" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore"></a>

```csharp
public string ValidBefore { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeepersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `PrivateKeyTypeInput`<sup>Optional</sup> <a name="PrivateKeyTypeInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput"></a>

```csharp
public string PrivateKeyTypeInput { get; }
```

- *Type:* string

---

##### `PublicKeyDataInput`<sup>Optional</sup> <a name="PublicKeyDataInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput"></a>

```csharp
public string PublicKeyDataInput { get; }
```

- *Type:* string

---

##### `PublicKeyTypeInput`<sup>Optional</sup> <a name="PublicKeyTypeInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput"></a>

```csharp
public string PublicKeyTypeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput"></a>

```csharp
public string ServiceAccountIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; }
```

- *Type:* string

---

##### `PublicKeyData`<sup>Required</sup> <a name="PublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData"></a>

```csharp
public string PublicKeyData { get; }
```

- *Type:* string

---

##### `PublicKeyType`<sup>Required</sup> <a name="PublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType"></a>

```csharp
public string PublicKeyType { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountKeyConfig <a name="ServiceAccountKeyConfig" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ServiceAccountKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServiceAccountId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Keepers = null,
    string KeyAlgorithm = null,
    string PrivateKeyType = null,
    string PublicKeyData = null,
    string PublicKeyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#id ServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData">PublicKeyData</a></code> | <code>string</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType">PublicKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; set; }
```

- *Type:* string

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#service_account_id ServiceAccountKey#service_account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#id ServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#keepers ServiceAccountKey#keepers}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#key_algorithm ServiceAccountKey#key_algorithm}

---

##### `PrivateKeyType`<sup>Optional</sup> <a name="PrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}.

---

##### `PublicKeyData`<sup>Optional</sup> <a name="PublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData"></a>

```csharp
public string PublicKeyData { get; set; }
```

- *Type:* string

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#public_key_data ServiceAccountKey#public_key_data}

---

##### `PublicKeyType`<sup>Optional</sup> <a name="PublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType"></a>

```csharp
public string PublicKeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}.

---



