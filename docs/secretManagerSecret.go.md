# `secretManagerSecret` Submodule <a name="`secretManagerSecret` Submodule" id="@cdktf/provider-google.secretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerSecret <a name="SecretManagerSecret" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecret(scope Construct, id *string, config SecretManagerSecretConfig) SecretManagerSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig">SecretManagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig">SecretManagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication">PutReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation">PutRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics">PutTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation">ResetRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionDestroyTtl">ResetVersionDestroyTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplication` <a name="PutReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication"></a>

```go
func PutReplication(value SecretManagerSecretReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `PutRotation` <a name="PutRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation"></a>

```go
func PutRotation(value SecretManagerSecretRotation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts"></a>

```go
func PutTimeouts(value SecretManagerSecretTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

---

##### `PutTopics` <a name="PutTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics"></a>

```go
func PutTopics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRotation` <a name="ResetRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation"></a>

```go
func ResetRotation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics"></a>

```go
func ResetTopics()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases"></a>

```go
func ResetVersionAliases()
```

##### `ResetVersionDestroyTtl` <a name="ResetVersionDestroyTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionDestroyTtl"></a>

```go
func ResetVersionDestroyTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.SecretManagerSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.SecretManagerSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.SecretManagerSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.SecretManagerSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecretManagerSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretManagerSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretManagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput">ReplicationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput">RotationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput">TopicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtlInput">VersionDestroyTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases">VersionAliases</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication"></a>

```go
func Replication() SecretManagerSecretReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation"></a>

```go
func Rotation() SecretManagerSecretRotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts"></a>

```go
func Timeouts() SecretManagerSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a>

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics"></a>

```go
func Topics() SecretManagerSecretTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput"></a>

```go
func ReplicationInput() SecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `RotationInput`<sup>Optional</sup> <a name="RotationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput"></a>

```go
func RotationInput() SecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput"></a>

```go
func TopicsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput"></a>

```go
func VersionAliasesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionDestroyTtlInput`<sup>Optional</sup> <a name="VersionDestroyTtlInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtlInput"></a>

```go
func VersionDestroyTtlInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases"></a>

```go
func VersionAliases() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtl"></a>

```go
func VersionDestroyTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerSecretConfig <a name="SecretManagerSecretConfig" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Replication: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretReplication,
	SecretId: *string,
	Annotations: *map[string]*string,
	ExpireTime: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Rotation: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretRotation,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretTimeouts,
	Topics: interface{},
	Ttl: *string,
	VersionAliases: *map[string]*string,
	VersionDestroyTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Custom metadata about the secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime">ExpireTime</a></code> | <code>*string</code> | Timestamp in UTC when the Secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels assigned to this Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics">Topics</a></code> | <code>interface{}</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL for the Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases">VersionAliases</a></code> | <code>*map[string]*string</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>*string</code> | Secret Version TTL after destruction request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication"></a>

```go
Replication SecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#replication SecretManagerSecret#replication}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#secret_id SecretManagerSecret#secret_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata about the secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#annotations SecretManagerSecret#annotations}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

Timestamp in UTC when the Secret is scheduled to expire.

This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#expire_time SecretManagerSecret#expire_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#labels SecretManagerSecret#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}.

---

##### `Rotation`<sup>Optional</sup> <a name="Rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation"></a>

```go
Rotation SecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#rotation SecretManagerSecret#rotation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts"></a>

```go
Timeouts SecretManagerSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#timeouts SecretManagerSecret#timeouts}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics"></a>

```go
Topics interface{}
```

- *Type:* interface{}

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#topics SecretManagerSecret#topics}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL for the Secret.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#ttl SecretManagerSecret#ttl}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases"></a>

```go
VersionAliases *map[string]*string
```

- *Type:* *map[string]*string

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#version_aliases SecretManagerSecret#version_aliases}

---

##### `VersionDestroyTtl`<sup>Optional</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionDestroyTtl"></a>

```go
VersionDestroyTtl *string
```

- *Type:* *string

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#version_destroy_ttl SecretManagerSecret#version_destroy_ttl}

---

### SecretManagerSecretReplication <a name="SecretManagerSecretReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretReplication {
	Auto: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretReplicationAuto,
	UserManaged: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretReplicationUserManaged,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto">Auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | auto block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | user_managed block. |

---

##### `Auto`<sup>Optional</sup> <a name="Auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto"></a>

```go
Auto SecretManagerSecretReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

auto block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#auto SecretManagerSecret#auto}

---

##### `UserManaged`<sup>Optional</sup> <a name="UserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged"></a>

```go
UserManaged SecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

user_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#user_managed SecretManagerSecret#user_managed}

---

### SecretManagerSecretReplicationAuto <a name="SecretManagerSecretReplicationAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretReplicationAuto {
	CustomerManagedEncryption: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `CustomerManagedEncryption`<sup>Optional</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption"></a>

```go
CustomerManagedEncryption SecretManagerSecretReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationAutoCustomerManagedEncryption <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretReplicationUserManaged <a name="SecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretReplicationUserManaged {
	Replicas: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas">Replicas</a></code> | <code>interface{}</code> | replicas block. |

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas"></a>

```go
Replicas interface{}
```

- *Type:* interface{}

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#replicas SecretManagerSecret#replicas}

---

### SecretManagerSecretReplicationUserManagedReplicas <a name="SecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretReplicationUserManagedReplicas {
	Location: *string,
	CustomerManagedEncryption: github.com/cdktf/cdktf-provider-google-go/google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location">Location</a></code> | <code>*string</code> | The canonical IDs of the location to replicate data. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location"></a>

```go
Location *string
```

- *Type:* *string

The canonical IDs of the location to replicate data. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#location SecretManagerSecret#location}

---

##### `CustomerManagedEncryption`<sup>Optional</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption"></a>

```go
CustomerManagedEncryption SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Describes the Cloud KMS encryption key that will be used to protect destination secret. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Describes the Cloud KMS encryption key that will be used to protect destination secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretRotation <a name="SecretManagerSecretRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretRotation {
	NextRotationTime: *string,
	RotationPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | The Duration between rotation notifications. |

---

##### `NextRotationTime`<sup>Optional</sup> <a name="NextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime"></a>

```go
NextRotationTime *string
```

- *Type:* *string

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#next_rotation_time SecretManagerSecret#next_rotation_time}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod"></a>

```go
RotationPeriod *string
```

- *Type:* *string

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#rotation_period SecretManagerSecret#rotation_period}

---

### SecretManagerSecretTimeouts <a name="SecretManagerSecretTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}.

---

### SecretManagerSecretTopics <a name="SecretManagerSecretTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

&secretmanagersecret.SecretManagerSecretTopics {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name">Name</a></code> | <code>*string</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/secret_manager_secret#name SecretManagerSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerSecretReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationAutoOutputReference <a name="SecretManagerSecretReplicationAutoOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationAutoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretReplicationAutoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption">PutCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption">ResetCustomerManagedEncryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedEncryption` <a name="PutCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption"></a>

```go
func PutCustomerManagedEncryption(value SecretManagerSecretReplicationAutoCustomerManagedEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `ResetCustomerManagedEncryption` <a name="ResetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption"></a>

```go
func ResetCustomerManagedEncryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput">CustomerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```go
func CustomerManagedEncryption() SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a>

---

##### `CustomerManagedEncryptionInput`<sup>Optional</sup> <a name="CustomerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput"></a>

```go
func CustomerManagedEncryptionInput() SecretManagerSecretReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerSecretReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---


### SecretManagerSecretReplicationOutputReference <a name="SecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto">PutAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged">PutUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto">ResetAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged">ResetUserManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuto` <a name="PutAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto"></a>

```go
func PutAuto(value SecretManagerSecretReplicationAuto)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `PutUserManaged` <a name="PutUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged"></a>

```go
func PutUserManaged(value SecretManagerSecretReplicationUserManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `ResetAuto` <a name="ResetAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto"></a>

```go
func ResetAuto()
```

##### `ResetUserManaged` <a name="ResetUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged"></a>

```go
func ResetUserManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto">Auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput">AutoInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput">UserManagedInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto"></a>

```go
func Auto() SecretManagerSecretReplicationAutoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a>

---

##### `UserManaged`<sup>Required</sup> <a name="UserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```go
func UserManaged() SecretManagerSecretReplicationUserManagedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a>

---

##### `AutoInput`<sup>Optional</sup> <a name="AutoInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput"></a>

```go
func AutoInput() SecretManagerSecretReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `UserManagedInput`<sup>Optional</sup> <a name="UserManagedInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput"></a>

```go
func UserManagedInput() SecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---


### SecretManagerSecretReplicationUserManagedOutputReference <a name="SecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationUserManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretReplicationUserManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas">PutReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicas` <a name="PutReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas"></a>

```go
func PutReplicas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```go
func Replicas() SecretManagerSecretReplicationUserManagedReplicasList
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---


### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationUserManagedReplicasList <a name="SecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationUserManagedReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretManagerSecretReplicationUserManagedReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```go
func Get(index *f64) SecretManagerSecretReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretReplicationUserManagedReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretManagerSecretReplicationUserManagedReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption">PutCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption">ResetCustomerManagedEncryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedEncryption` <a name="PutCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption"></a>

```go
func PutCustomerManagedEncryption(value SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `ResetCustomerManagedEncryption` <a name="ResetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption"></a>

```go
func ResetCustomerManagedEncryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput">CustomerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```go
func CustomerManagedEncryption() SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a>

---

##### `CustomerManagedEncryptionInput`<sup>Optional</sup> <a name="CustomerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput"></a>

```go
func CustomerManagedEncryptionInput() SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretManagerSecretRotationOutputReference <a name="SecretManagerSecretRotationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretRotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretRotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime">ResetNextRotationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNextRotationTime` <a name="ResetNextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime"></a>

```go
func ResetNextRotationTime()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```go
func NextRotationTimeInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *string
```

- *Type:* *string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```go
func NextRotationTime() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---


### SecretManagerSecretTimeoutsOutputReference <a name="SecretManagerSecretTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerSecretTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretManagerSecretTopicsList <a name="SecretManagerSecretTopicsList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretTopicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretManagerSecretTopicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get"></a>

```go
func Get(index *f64) SecretManagerSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretManagerSecretTopicsOutputReference <a name="SecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/secretmanagersecret"

secretmanagersecret.NewSecretManagerSecretTopicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretManagerSecretTopicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



