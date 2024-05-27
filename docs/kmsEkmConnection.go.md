# `kmsEkmConnection` Submodule <a name="`kmsEkmConnection` Submodule" id="@cdktf/provider-google.kmsEkmConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsEkmConnection <a name="KmsEkmConnection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection google_kms_ekm_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.NewKmsEkmConnection(scope Construct, id *string, config KmsEkmConnectionConfig) KmsEkmConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig">KmsEkmConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig">KmsEkmConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers">PutServiceResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetCryptoSpacePath">ResetCryptoSpacePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetKeyManagementMode">ResetKeyManagementMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServiceResolvers` <a name="PutServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers"></a>

```go
func PutServiceResolvers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts"></a>

```go
func PutTimeouts(value KmsEkmConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

---

##### `ResetCryptoSpacePath` <a name="ResetCryptoSpacePath" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetCryptoSpacePath"></a>

```go
func ResetCryptoSpacePath()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyManagementMode` <a name="ResetKeyManagementMode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetKeyManagementMode"></a>

```go
func ResetKeyManagementMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.KmsEkmConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.KmsEkmConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.KmsEkmConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.KmsEkmConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsEkmConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsEkmConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsEkmConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolvers">ServiceResolvers</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList">KmsEkmConnectionServiceResolversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference">KmsEkmConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePathInput">CryptoSpacePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementModeInput">KeyManagementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolversInput">ServiceResolversInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePath">CryptoSpacePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementMode">KeyManagementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ServiceResolvers`<sup>Required</sup> <a name="ServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolvers"></a>

```go
func ServiceResolvers() KmsEkmConnectionServiceResolversList
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList">KmsEkmConnectionServiceResolversList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeouts"></a>

```go
func Timeouts() KmsEkmConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference">KmsEkmConnectionTimeoutsOutputReference</a>

---

##### `CryptoSpacePathInput`<sup>Optional</sup> <a name="CryptoSpacePathInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePathInput"></a>

```go
func CryptoSpacePathInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyManagementModeInput`<sup>Optional</sup> <a name="KeyManagementModeInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementModeInput"></a>

```go
func KeyManagementModeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceResolversInput`<sup>Optional</sup> <a name="ServiceResolversInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolversInput"></a>

```go
func ServiceResolversInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CryptoSpacePath`<sup>Required</sup> <a name="CryptoSpacePath" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePath"></a>

```go
func CryptoSpacePath() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyManagementMode`<sup>Required</sup> <a name="KeyManagementMode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementMode"></a>

```go
func KeyManagementMode() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsEkmConnectionConfig <a name="KmsEkmConnectionConfig" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

&kmsekmconnection.KmsEkmConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ServiceResolvers: interface{},
	CryptoSpacePath: *string,
	Etag: *string,
	Id: *string,
	KeyManagementMode: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.kmsEkmConnection.KmsEkmConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.name">Name</a></code> | <code>*string</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.serviceResolvers">ServiceResolvers</a></code> | <code>interface{}</code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.cryptoSpacePath">CryptoSpacePath</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.etag">Etag</a></code> | <code>*string</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.keyManagementMode">KeyManagementMode</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#location KmsEkmConnection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#name KmsEkmConnection#name}

---

##### `ServiceResolvers`<sup>Required</sup> <a name="ServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.serviceResolvers"></a>

```go
ServiceResolvers interface{}
```

- *Type:* interface{}

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#service_resolvers KmsEkmConnection#service_resolvers}

---

##### `CryptoSpacePath`<sup>Optional</sup> <a name="CryptoSpacePath" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.cryptoSpacePath"></a>

```go
CryptoSpacePath *string
```

- *Type:* *string

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#crypto_space_path KmsEkmConnection#crypto_space_path}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#etag KmsEkmConnection#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyManagementMode`<sup>Optional</sup> <a name="KeyManagementMode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.keyManagementMode"></a>

```go
KeyManagementMode *string
```

- *Type:* *string

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#key_management_mode KmsEkmConnection#key_management_mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.timeouts"></a>

```go
Timeouts KmsEkmConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#timeouts KmsEkmConnection#timeouts}

---

### KmsEkmConnectionServiceResolvers <a name="KmsEkmConnectionServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

&kmsekmconnection.KmsEkmConnectionServiceResolvers {
	Hostname: *string,
	ServerCertificates: interface{},
	ServiceDirectoryService: *string,
	EndpointFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.hostname">Hostname</a></code> | <code>*string</code> | Required. The hostname of the EKM replica used at TLS and HTTP layers. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serverCertificates">ServerCertificates</a></code> | <code>interface{}</code> | server_certificates block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serviceDirectoryService">ServiceDirectoryService</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.endpointFilter">EndpointFilter</a></code> | <code>*string</code> | Optional. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Required. The hostname of the EKM replica used at TLS and HTTP layers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#hostname KmsEkmConnection#hostname}

---

##### `ServerCertificates`<sup>Required</sup> <a name="ServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serverCertificates"></a>

```go
ServerCertificates interface{}
```

- *Type:* interface{}

server_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#server_certificates KmsEkmConnection#server_certificates}

---

##### `ServiceDirectoryService`<sup>Required</sup> <a name="ServiceDirectoryService" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serviceDirectoryService"></a>

```go
ServiceDirectoryService *string
```

- *Type:* *string

Required.

The resource name of the Service Directory service pointing to an EKM replica, in the format projects/* /locations/* /namespaces/* /services/*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#service_directory_service KmsEkmConnection#service_directory_service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `EndpointFilter`<sup>Optional</sup> <a name="EndpointFilter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.endpointFilter"></a>

```go
EndpointFilter *string
```

- *Type:* *string

Optional.

The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#endpoint_filter KmsEkmConnection#endpoint_filter}

---

### KmsEkmConnectionServiceResolversServerCertificates <a name="KmsEkmConnectionServiceResolversServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

&kmsekmconnection.KmsEkmConnectionServiceResolversServerCertificates {
	RawDer: *string,
	SubjectAlternativeDnsNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.rawDer">RawDer</a></code> | <code>*string</code> | Required. The raw certificate bytes in DER format. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames">SubjectAlternativeDnsNames</a></code> | <code>*[]*string</code> | Output only. The subject Alternative DNS names. Only present if parsed is true. |

---

##### `RawDer`<sup>Required</sup> <a name="RawDer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.rawDer"></a>

```go
RawDer *string
```

- *Type:* *string

Required. The raw certificate bytes in DER format. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#raw_der KmsEkmConnection#raw_der}

---

##### `SubjectAlternativeDnsNames`<sup>Optional</sup> <a name="SubjectAlternativeDnsNames" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames"></a>

```go
SubjectAlternativeDnsNames *[]*string
```

- *Type:* *[]*string

Output only. The subject Alternative DNS names. Only present if parsed is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#subject_alternative_dns_names KmsEkmConnection#subject_alternative_dns_names}

---

### KmsEkmConnectionTimeouts <a name="KmsEkmConnectionTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

&kmsekmconnection.KmsEkmConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.30.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsEkmConnectionServiceResolversList <a name="KmsEkmConnectionServiceResolversList" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.NewKmsEkmConnectionServiceResolversList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsEkmConnectionServiceResolversList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get"></a>

```go
func Get(index *f64) KmsEkmConnectionServiceResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KmsEkmConnectionServiceResolversOutputReference <a name="KmsEkmConnectionServiceResolversOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.NewKmsEkmConnectionServiceResolversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsEkmConnectionServiceResolversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates">PutServerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter">ResetEndpointFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerCertificates` <a name="PutServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates"></a>

```go
func PutServerCertificates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEndpointFilter` <a name="ResetEndpointFilter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter"></a>

```go
func ResetEndpointFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificates">ServerCertificates</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList">KmsEkmConnectionServiceResolversServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput">EndpointFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput">ServerCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput">ServiceDirectoryServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilter">EndpointFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService">ServiceDirectoryService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerCertificates`<sup>Required</sup> <a name="ServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificates"></a>

```go
func ServerCertificates() KmsEkmConnectionServiceResolversServerCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList">KmsEkmConnectionServiceResolversServerCertificatesList</a>

---

##### `EndpointFilterInput`<sup>Optional</sup> <a name="EndpointFilterInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput"></a>

```go
func EndpointFilterInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `ServerCertificatesInput`<sup>Optional</sup> <a name="ServerCertificatesInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput"></a>

```go
func ServerCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceDirectoryServiceInput`<sup>Optional</sup> <a name="ServiceDirectoryServiceInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput"></a>

```go
func ServiceDirectoryServiceInput() *string
```

- *Type:* *string

---

##### `EndpointFilter`<sup>Required</sup> <a name="EndpointFilter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilter"></a>

```go
func EndpointFilter() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `ServiceDirectoryService`<sup>Required</sup> <a name="ServiceDirectoryService" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService"></a>

```go
func ServiceDirectoryService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KmsEkmConnectionServiceResolversServerCertificatesList <a name="KmsEkmConnectionServiceResolversServerCertificatesList" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.NewKmsEkmConnectionServiceResolversServerCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsEkmConnectionServiceResolversServerCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get"></a>

```go
func Get(index *f64) KmsEkmConnectionServiceResolversServerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KmsEkmConnectionServiceResolversServerCertificatesOutputReference <a name="KmsEkmConnectionServiceResolversServerCertificatesOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.NewKmsEkmConnectionServiceResolversServerCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsEkmConnectionServiceResolversServerCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames">ResetSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubjectAlternativeDnsNames` <a name="ResetSubjectAlternativeDnsNames" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames"></a>

```go
func ResetSubjectAlternativeDnsNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime">NotAfterTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime">NotBeforeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed">Parsed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint">Sha256Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput">RawDerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput">SubjectAlternativeDnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer">RawDer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames">SubjectAlternativeDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `NotAfterTime`<sup>Required</sup> <a name="NotAfterTime" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime"></a>

```go
func NotAfterTime() *string
```

- *Type:* *string

---

##### `NotBeforeTime`<sup>Required</sup> <a name="NotBeforeTime" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime"></a>

```go
func NotBeforeTime() *string
```

- *Type:* *string

---

##### `Parsed`<sup>Required</sup> <a name="Parsed" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed"></a>

```go
func Parsed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Sha256Fingerprint`<sup>Required</sup> <a name="Sha256Fingerprint" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint"></a>

```go
func Sha256Fingerprint() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `RawDerInput`<sup>Optional</sup> <a name="RawDerInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput"></a>

```go
func RawDerInput() *string
```

- *Type:* *string

---

##### `SubjectAlternativeDnsNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeDnsNamesInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput"></a>

```go
func SubjectAlternativeDnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RawDer`<sup>Required</sup> <a name="RawDer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer"></a>

```go
func RawDer() *string
```

- *Type:* *string

---

##### `SubjectAlternativeDnsNames`<sup>Required</sup> <a name="SubjectAlternativeDnsNames" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames"></a>

```go
func SubjectAlternativeDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KmsEkmConnectionTimeoutsOutputReference <a name="KmsEkmConnectionTimeoutsOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/kmsekmconnection"

kmsekmconnection.NewKmsEkmConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsEkmConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



