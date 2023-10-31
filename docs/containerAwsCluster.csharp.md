# `google_container_aws_cluster`

Refer to the Terraform Registory for docs: [`google_container_aws_cluster`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster).

# `containerAwsCluster` Submodule <a name="`containerAwsCluster` Submodule" id="@cdktf/provider-google.containerAwsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAwsCluster <a name="ContainerAwsCluster" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster google_container_aws_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsCluster(Construct Scope, string Id, ContainerAwsClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig">ContainerAwsClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig">ContainerAwsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(ContainerAwsClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putBinaryAuthorization"></a>

```csharp
private void PutBinaryAuthorization(ContainerAwsClusterBinaryAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane"></a>

```csharp
private void PutControlPlane(ContainerAwsClusterControlPlane Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet"></a>

```csharp
private void PutFleet(ContainerAwsClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking"></a>

```csharp
private void PutNetworking(ContainerAwsClusterNetworking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAwsClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetBinaryAuthorization"></a>

```csharp
private void ResetBinaryAuthorization()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAwsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAwsCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAwsCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAwsCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAwsCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAwsCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAwsCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAwsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAwsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference">ContainerAwsClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig">WorkloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization"></a>

```csharp
public ContainerAwsClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a>

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorization"></a>

```csharp
public ContainerAwsClusterBinaryAuthorizationOutputReference BinaryAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference">ContainerAwsClusterBinaryAuthorizationOutputReference</a>

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane"></a>

```csharp
public ContainerAwsClusterControlPlaneOutputReference ControlPlane { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet"></a>

```csharp
public ContainerAwsClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking"></a>

```csharp
public ContainerAwsClusterNetworkingOutputReference Networking { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts"></a>

```csharp
public ContainerAwsClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkloadIdentityConfig`<sup>Required</sup> <a name="WorkloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig"></a>

```csharp
public ContainerAwsClusterWorkloadIdentityConfigList WorkloadIdentityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput"></a>

```csharp
public ContainerAwsClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.binaryAuthorizationInput"></a>

```csharp
public ContainerAwsClusterBinaryAuthorization BinaryAuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput"></a>

```csharp
public ContainerAwsClusterControlPlane ControlPlaneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput"></a>

```csharp
public ContainerAwsClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput"></a>

```csharp
public ContainerAwsClusterNetworking NetworkingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAwsClusterAuthorization <a name="ContainerAwsClusterAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterAuthorization {
    object AdminUsers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>object</code> | admin_users block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers"></a>

```csharp
public object AdminUsers { get; set; }
```

- *Type:* object

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#admin_users ContainerAwsCluster#admin_users}

---

### ContainerAwsClusterAuthorizationAdminUsers <a name="ContainerAwsClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterAuthorizationAdminUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>string</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#username ContainerAwsCluster#username}

---

### ContainerAwsClusterBinaryAuthorization <a name="ContainerAwsClusterBinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterBinaryAuthorization {
    string EvaluationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE. |

---

##### `EvaluationMode`<sup>Optional</sup> <a name="EvaluationMode" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; set; }
```

- *Type:* string

Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#evaluation_mode ContainerAwsCluster#evaluation_mode}

---

### ContainerAwsClusterConfig <a name="ContainerAwsClusterConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ContainerAwsClusterAuthorization Authorization,
    string AwsRegion,
    ContainerAwsClusterControlPlane ControlPlane,
    ContainerAwsClusterFleet Fleet,
    string Location,
    string Name,
    ContainerAwsClusterNetworking Networking,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    ContainerAwsClusterBinaryAuthorization BinaryAuthorization = null,
    string Description = null,
    string Id = null,
    string Project = null,
    ContainerAwsClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description">Description</a></code> | <code>string</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization"></a>

```csharp
public ContainerAwsClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#authorization ContainerAwsCluster#authorization}

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#aws_region ContainerAwsCluster#aws_region}

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane"></a>

```csharp
public ContainerAwsClusterControlPlane ControlPlane { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#control_plane ContainerAwsCluster#control_plane}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet"></a>

```csharp
public ContainerAwsClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#fleet ContainerAwsCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#location ContainerAwsCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#name ContainerAwsCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking"></a>

```csharp
public ContainerAwsClusterNetworking Networking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#networking ContainerAwsCluster#networking}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#annotations ContainerAwsCluster#annotations}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.binaryAuthorization"></a>

```csharp
public ContainerAwsClusterBinaryAuthorization BinaryAuthorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#binary_authorization ContainerAwsCluster#binary_authorization}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#description ContainerAwsCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#id ContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts"></a>

```csharp
public ContainerAwsClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#timeouts ContainerAwsCluster#timeouts}

---

### ContainerAwsClusterControlPlane <a name="ContainerAwsClusterControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlane {
    ContainerAwsClusterControlPlaneAwsServicesAuthentication AwsServicesAuthentication,
    ContainerAwsClusterControlPlaneConfigEncryption ConfigEncryption,
    ContainerAwsClusterControlPlaneDatabaseEncryption DatabaseEncryption,
    string IamInstanceProfile,
    string[] SubnetIds,
    string Version,
    string InstanceType = null,
    ContainerAwsClusterControlPlaneMainVolume MainVolume = null,
    ContainerAwsClusterControlPlaneProxyConfig ProxyConfig = null,
    ContainerAwsClusterControlPlaneRootVolume RootVolume = null,
    string[] SecurityGroupIds = null,
    ContainerAwsClusterControlPlaneSshConfig SshConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication">AwsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | aws_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | The name of the AWS IAM instance pofile to assign to each control plane replica. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The list of subnets where control plane replicas will run. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version">Version</a></code> | <code>string</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling . |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType">InstanceType</a></code> | <code>string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |

---

##### `AwsServicesAuthentication`<sup>Required</sup> <a name="AwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication"></a>

```csharp
public ContainerAwsClusterControlPlaneAwsServicesAuthentication AwsServicesAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#aws_services_authentication ContainerAwsCluster#aws_services_authentication}

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption"></a>

```csharp
public ContainerAwsClusterControlPlaneConfigEncryption ConfigEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#config_encryption ContainerAwsCluster#config_encryption}

---

##### `DatabaseEncryption`<sup>Required</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption"></a>

```csharp
public ContainerAwsClusterControlPlaneDatabaseEncryption DatabaseEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#database_encryption ContainerAwsCluster#database_encryption}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#iam_instance_profile ContainerAwsCluster#iam_instance_profile}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#subnet_ids ContainerAwsCluster#subnet_ids}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#version ContainerAwsCluster#version}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#instance_type ContainerAwsCluster#instance_type}

---

##### `MainVolume`<sup>Optional</sup> <a name="MainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume"></a>

```csharp
public ContainerAwsClusterControlPlaneMainVolume MainVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#main_volume ContainerAwsCluster#main_volume}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig"></a>

```csharp
public ContainerAwsClusterControlPlaneProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#proxy_config ContainerAwsCluster#proxy_config}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume"></a>

```csharp
public ContainerAwsClusterControlPlaneRootVolume RootVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#root_volume ContainerAwsCluster#root_volume}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#security_group_ids ContainerAwsCluster#security_group_ids}

---

##### `SshConfig`<sup>Optional</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig"></a>

```csharp
public ContainerAwsClusterControlPlaneSshConfig SshConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#ssh_config ContainerAwsCluster#ssh_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#tags ContainerAwsCluster#tags}

---

### ContainerAwsClusterControlPlaneAwsServicesAuthentication <a name="ContainerAwsClusterControlPlaneAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneAwsServicesAuthentication {
    string RoleArn,
    string RoleSessionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName">RoleSessionName</a></code> | <code>string</code> | Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#role_arn ContainerAwsCluster#role_arn}

---

##### `RoleSessionName`<sup>Optional</sup> <a name="RoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName"></a>

```csharp
public string RoleSessionName { get; set; }
```

- *Type:* string

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#role_session_name ContainerAwsCluster#role_session_name}

---

### ContainerAwsClusterControlPlaneConfigEncryption <a name="ContainerAwsClusterControlPlaneConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneConfigEncryption {
    string KmsKeyArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt cluster configuration. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneDatabaseEncryption <a name="ContainerAwsClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneDatabaseEncryption {
    string KmsKeyArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt cluster secrets. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneMainVolume <a name="ContainerAwsClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneMainVolume {
    double Iops = null,
    string KmsKeyArn = null,
    double SizeGib = null,
    double Throughput = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops">Iops</a></code> | <code>double</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.throughput">Throughput</a></code> | <code>double</code> | Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneProxyConfig <a name="ContainerAwsClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneProxyConfig {
    string SecretArn,
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#secret_arn ContainerAwsCluster#secret_arn}

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#secret_version ContainerAwsCluster#secret_version}

---

### ContainerAwsClusterControlPlaneRootVolume <a name="ContainerAwsClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneRootVolume {
    double Iops = null,
    string KmsKeyArn = null,
    double SizeGib = null,
    double Throughput = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops">Iops</a></code> | <code>double</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.throughput">Throughput</a></code> | <code>double</code> | Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#throughput ContainerAwsCluster#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneSshConfig <a name="ContainerAwsClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneSshConfig {
    string Ec2KeyPair
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; set; }
```

- *Type:* string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#ec2_key_pair ContainerAwsCluster#ec2_key_pair}

---

### ContainerAwsClusterFleet <a name="ContainerAwsClusterFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterFleet {
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project">Project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#project ContainerAwsCluster#project}

---

### ContainerAwsClusterNetworking <a name="ContainerAwsClusterNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterNetworking {
    string[] PodAddressCidrBlocks,
    string[] ServiceAddressCidrBlocks,
    string VpcId,
    object PerNodePoolSgRulesDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId">VpcId</a></code> | <code>string</code> | The VPC associated with the cluster. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled">PerNodePoolSgRulesDisabled</a></code> | <code>object</code> | Disable the per node pool subnet security group rules on the control plane security group. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; set; }
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#pod_address_cidr_blocks ContainerAwsCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; set; }
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#service_address_cidr_blocks ContainerAwsCluster#service_address_cidr_blocks}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#vpc_id ContainerAwsCluster#vpc_id}

---

##### `PerNodePoolSgRulesDisabled`<sup>Optional</sup> <a name="PerNodePoolSgRulesDisabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled"></a>

```csharp
public object PerNodePoolSgRulesDisabled { get; set; }
```

- *Type:* object

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#per_node_pool_sg_rules_disabled ContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

### ContainerAwsClusterTimeouts <a name="ContainerAwsClusterTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#create ContainerAwsCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#delete ContainerAwsCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_cluster#update ContainerAwsCluster#update}.

---

### ContainerAwsClusterWorkloadIdentityConfig <a name="ContainerAwsClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterWorkloadIdentityConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAwsClusterAuthorizationAdminUsersList <a name="ContainerAwsClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterAuthorizationAdminUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get"></a>

```csharp
private ContainerAwsClusterAuthorizationAdminUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAwsClusterAuthorizationAdminUsersOutputReference <a name="ContainerAwsClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAwsClusterAuthorizationOutputReference <a name="ContainerAwsClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers"></a>

```csharp
private void PutAdminUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public ContainerAwsClusterAuthorizationAdminUsersList AdminUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public object AdminUsersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---


### ContainerAwsClusterBinaryAuthorizationOutputReference <a name="ContainerAwsClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterBinaryAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode">ResetEvaluationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluationMode` <a name="ResetEvaluationMode" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```csharp
private void ResetEvaluationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```csharp
public string EvaluationModeInput { get; }
```

- *Type:* string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterBinaryAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterBinaryAuthorization">ContainerAwsClusterBinaryAuthorization</a>

---


### ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference <a name="ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName">ResetRoleSessionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleSessionName` <a name="ResetRoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName"></a>

```csharp
private void ResetRoleSessionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput">RoleSessionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName">RoleSessionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleSessionNameInput`<sup>Optional</sup> <a name="RoleSessionNameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput"></a>

```csharp
public string RoleSessionNameInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleSessionName`<sup>Required</sup> <a name="RoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName"></a>

```csharp
public string RoleSessionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneAwsServicesAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---


### ContainerAwsClusterControlPlaneConfigEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneConfigEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneConfigEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneConfigEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---


### ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneDatabaseEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAwsClusterControlPlaneMainVolumeOutputReference <a name="ContainerAwsClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneMainVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneMainVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---


### ContainerAwsClusterControlPlaneOutputReference <a name="ContainerAwsClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication">PutAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption">PutConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption">PutDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume">PutMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume">ResetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig">ResetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsServicesAuthentication` <a name="PutAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication"></a>

```csharp
private void PutAwsServicesAuthentication(ContainerAwsClusterControlPlaneAwsServicesAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `PutConfigEncryption` <a name="PutConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption"></a>

```csharp
private void PutConfigEncryption(ContainerAwsClusterControlPlaneConfigEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `PutDatabaseEncryption` <a name="PutDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```csharp
private void PutDatabaseEncryption(ContainerAwsClusterControlPlaneDatabaseEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `PutMainVolume` <a name="PutMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume"></a>

```csharp
private void PutMainVolume(ContainerAwsClusterControlPlaneMainVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig"></a>

```csharp
private void PutProxyConfig(ContainerAwsClusterControlPlaneProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume"></a>

```csharp
private void PutRootVolume(ContainerAwsClusterControlPlaneRootVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig"></a>

```csharp
private void PutSshConfig(ContainerAwsClusterControlPlaneSshConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetMainVolume` <a name="ResetMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume"></a>

```csharp
private void ResetMainVolume()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSshConfig` <a name="ResetSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig"></a>

```csharp
private void ResetSshConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication">AwsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput">AwsServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput">ConfigEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput">DatabaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput">MainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsServicesAuthentication`<sup>Required</sup> <a name="AwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication"></a>

```csharp
public ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference AwsServicesAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a>

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption"></a>

```csharp
public ContainerAwsClusterControlPlaneConfigEncryptionOutputReference ConfigEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a>

---

##### `DatabaseEncryption`<sup>Required</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```csharp
public ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference DatabaseEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `MainVolume`<sup>Required</sup> <a name="MainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume"></a>

```csharp
public ContainerAwsClusterControlPlaneMainVolumeOutputReference MainVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig"></a>

```csharp
public ContainerAwsClusterControlPlaneProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume"></a>

```csharp
public ContainerAwsClusterControlPlaneRootVolumeOutputReference RootVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig"></a>

```csharp
public ContainerAwsClusterControlPlaneSshConfigOutputReference SshConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a>

---

##### `AwsServicesAuthenticationInput`<sup>Optional</sup> <a name="AwsServicesAuthenticationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput"></a>

```csharp
public ContainerAwsClusterControlPlaneAwsServicesAuthentication AwsServicesAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `ConfigEncryptionInput`<sup>Optional</sup> <a name="ConfigEncryptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput"></a>

```csharp
public ContainerAwsClusterControlPlaneConfigEncryption ConfigEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `DatabaseEncryptionInput`<sup>Optional</sup> <a name="DatabaseEncryptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```csharp
public ContainerAwsClusterControlPlaneDatabaseEncryption DatabaseEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `MainVolumeInput`<sup>Optional</sup> <a name="MainVolumeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```csharp
public ContainerAwsClusterControlPlaneMainVolume MainVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```csharp
public ContainerAwsClusterControlPlaneProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```csharp
public ContainerAwsClusterControlPlaneRootVolume RootVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```csharp
public ContainerAwsClusterControlPlaneSshConfig SshConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlane InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---


### ContainerAwsClusterControlPlaneProxyConfigOutputReference <a name="ContainerAwsClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---


### ContainerAwsClusterControlPlaneRootVolumeOutputReference <a name="ContainerAwsClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneRootVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneRootVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---


### ContainerAwsClusterControlPlaneSshConfigOutputReference <a name="ContainerAwsClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterControlPlaneSshConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput"></a>

```csharp
public string Ec2KeyPairInput { get; }
```

- *Type:* string

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterControlPlaneSshConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---


### ContainerAwsClusterFleetOutputReference <a name="ContainerAwsClusterFleetOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---


### ContainerAwsClusterNetworkingOutputReference <a name="ContainerAwsClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterNetworkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled">ResetPerNodePoolSgRulesDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerNodePoolSgRulesDisabled` <a name="ResetPerNodePoolSgRulesDisabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled"></a>

```csharp
private void ResetPerNodePoolSgRulesDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput">PerNodePoolSgRulesDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled">PerNodePoolSgRulesDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerNodePoolSgRulesDisabledInput`<sup>Optional</sup> <a name="PerNodePoolSgRulesDisabledInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput"></a>

```csharp
public object PerNodePoolSgRulesDisabledInput { get; }
```

- *Type:* object

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```csharp
public string[] PodAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```csharp
public string[] ServiceAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `PerNodePoolSgRulesDisabled`<sup>Required</sup> <a name="PerNodePoolSgRulesDisabled" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled"></a>

```csharp
public object PerNodePoolSgRulesDisabled { get; }
```

- *Type:* object

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterNetworking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---


### ContainerAwsClusterTimeoutsOutputReference <a name="ContainerAwsClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAwsClusterWorkloadIdentityConfigList <a name="ContainerAwsClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterWorkloadIdentityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get"></a>

```csharp
private ContainerAwsClusterWorkloadIdentityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContainerAwsClusterWorkloadIdentityConfigOutputReference <a name="ContainerAwsClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAwsClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool">WorkloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `WorkloadPool`<sup>Required</sup> <a name="WorkloadPool" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```csharp
public string WorkloadPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerAwsClusterWorkloadIdentityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a>

---



