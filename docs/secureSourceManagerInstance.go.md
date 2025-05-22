# `secureSourceManagerInstance` Submodule <a name="`secureSourceManagerInstance` Submodule" id="@cdktf/provider-google.secureSourceManagerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerInstance <a name="SecureSourceManagerInstance" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance google_secure_source_manager_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.NewSecureSourceManagerInstance(scope Construct, id *string, config SecureSourceManagerInstanceConfig) SecureSourceManagerInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig">SecureSourceManagerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig">SecureSourceManagerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig">PutPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig">PutWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetPrivateConfig">ResetPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetWorkforceIdentityFederationConfig">ResetWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateConfig` <a name="PutPrivateConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig"></a>

```go
func PutPrivateConfig(value SecureSourceManagerInstancePrivateConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts"></a>

```go
func PutTimeouts(value SecureSourceManagerInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---

##### `PutWorkforceIdentityFederationConfig` <a name="PutWorkforceIdentityFederationConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig"></a>

```go
func PutWorkforceIdentityFederationConfig(value SecureSourceManagerInstanceWorkforceIdentityFederationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPrivateConfig` <a name="ResetPrivateConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetPrivateConfig"></a>

```go
func ResetPrivateConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkforceIdentityFederationConfig` <a name="ResetWorkforceIdentityFederationConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetWorkforceIdentityFederationConfig"></a>

```go
func ResetWorkforceIdentityFederationConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecureSourceManagerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.SecureSourceManagerInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.SecureSourceManagerInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.SecureSourceManagerInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.SecureSourceManagerInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecureSourceManagerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecureSourceManagerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecureSourceManagerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList">SecureSourceManagerInstanceHostConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfig">PrivateConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference">SecureSourceManagerInstancePrivateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.stateNote">StateNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference">SecureSourceManagerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfig">WorkforceIdentityFederationConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfigInput">PrivateConfigInput</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfigInput">WorkforceIdentityFederationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.hostConfig"></a>

```go
func HostConfig() SecureSourceManagerInstanceHostConfigList
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList">SecureSourceManagerInstanceHostConfigList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateConfig`<sup>Required</sup> <a name="PrivateConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfig"></a>

```go
func PrivateConfig() SecureSourceManagerInstancePrivateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference">SecureSourceManagerInstancePrivateConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateNote`<sup>Required</sup> <a name="StateNote" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.stateNote"></a>

```go
func StateNote() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeouts"></a>

```go
func Timeouts() SecureSourceManagerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference">SecureSourceManagerInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkforceIdentityFederationConfig`<sup>Required</sup> <a name="WorkforceIdentityFederationConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfig"></a>

```go
func WorkforceIdentityFederationConfig() SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PrivateConfigInput`<sup>Optional</sup> <a name="PrivateConfigInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfigInput"></a>

```go
func PrivateConfigInput() SecureSourceManagerInstancePrivateConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkforceIdentityFederationConfigInput`<sup>Optional</sup> <a name="WorkforceIdentityFederationConfigInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfigInput"></a>

```go
func WorkforceIdentityFederationConfigInput() SecureSourceManagerInstanceWorkforceIdentityFederationConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerInstanceConfig <a name="SecureSourceManagerInstanceConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

&securesourcemanagerinstance.SecureSourceManagerInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Location: *string,
	Id: *string,
	KmsKey: *string,
	Labels: *map[string]*string,
	PrivateConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts,
	WorkforceIdentityFederationConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The name for the Instance. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.location">Location</a></code> | <code>*string</code> | The location for the Instance. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.privateConfig">PrivateConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig">WorkforceIdentityFederationConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#instance_id SecureSourceManagerInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#location SecureSourceManagerInstance#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#kms_key SecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#labels SecureSourceManagerInstance#labels}

---

##### `PrivateConfig`<sup>Optional</sup> <a name="PrivateConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.privateConfig"></a>

```go
PrivateConfig SecureSourceManagerInstancePrivateConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#private_config SecureSourceManagerInstance#private_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.timeouts"></a>

```go
Timeouts SecureSourceManagerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#timeouts SecureSourceManagerInstance#timeouts}

---

##### `WorkforceIdentityFederationConfig`<sup>Optional</sup> <a name="WorkforceIdentityFederationConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig"></a>

```go
WorkforceIdentityFederationConfig SecureSourceManagerInstanceWorkforceIdentityFederationConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#workforce_identity_federation_config SecureSourceManagerInstance#workforce_identity_federation_config}

---

### SecureSourceManagerInstanceHostConfig <a name="SecureSourceManagerInstanceHostConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

&securesourcemanagerinstance.SecureSourceManagerInstanceHostConfig {

}
```


### SecureSourceManagerInstancePrivateConfig <a name="SecureSourceManagerInstancePrivateConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

&securesourcemanagerinstance.SecureSourceManagerInstancePrivateConfig {
	CaPool: *string,
	IsPrivate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.caPool">CaPool</a></code> | <code>*string</code> | CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.isPrivate">IsPrivate</a></code> | <code>interface{}</code> | 'Indicate if it's private instance.'. |

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.caPool"></a>

```go
CaPool *string
```

- *Type:* *string

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#ca_pool SecureSourceManagerInstance#ca_pool}

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.isPrivate"></a>

```go
IsPrivate interface{}
```

- *Type:* interface{}

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#is_private SecureSourceManagerInstance#is_private}

---

### SecureSourceManagerInstanceTimeouts <a name="SecureSourceManagerInstanceTimeouts" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

&securesourcemanagerinstance.SecureSourceManagerInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}.

---

### SecureSourceManagerInstanceWorkforceIdentityFederationConfig <a name="SecureSourceManagerInstanceWorkforceIdentityFederationConfig" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

&securesourcemanagerinstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | 'Whether Workforce Identity Federation is enabled.'. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secure_source_manager_instance#enabled SecureSourceManagerInstance#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerInstanceHostConfigList <a name="SecureSourceManagerInstanceHostConfigList" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.NewSecureSourceManagerInstanceHostConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecureSourceManagerInstanceHostConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get"></a>

```go
func Get(index *f64) SecureSourceManagerInstanceHostConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecureSourceManagerInstanceHostConfigOutputReference <a name="SecureSourceManagerInstanceHostConfigOutputReference" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.NewSecureSourceManagerInstanceHostConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecureSourceManagerInstanceHostConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp">GitHttp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh">GitSsh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.html">Html</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig">SecureSourceManagerInstanceHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp"></a>

```go
func GitHttp() *string
```

- *Type:* *string

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh"></a>

```go
func GitSsh() *string
```

- *Type:* *string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.html"></a>

```go
func Html() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SecureSourceManagerInstanceHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig">SecureSourceManagerInstanceHostConfig</a>

---


### SecureSourceManagerInstancePrivateConfigOutputReference <a name="SecureSourceManagerInstancePrivateConfigOutputReference" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.NewSecureSourceManagerInstancePrivateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecureSourceManagerInstancePrivateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment">HttpServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment">SshServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput">IsPrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPool">CaPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate">IsPrivate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpServiceAttachment`<sup>Required</sup> <a name="HttpServiceAttachment" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment"></a>

```go
func HttpServiceAttachment() *string
```

- *Type:* *string

---

##### `SshServiceAttachment`<sup>Required</sup> <a name="SshServiceAttachment" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment"></a>

```go
func SshServiceAttachment() *string
```

- *Type:* *string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput"></a>

```go
func CaPoolInput() *string
```

- *Type:* *string

---

##### `IsPrivateInput`<sup>Optional</sup> <a name="IsPrivateInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput"></a>

```go
func IsPrivateInput() interface{}
```

- *Type:* interface{}

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPool"></a>

```go
func CaPool() *string
```

- *Type:* *string

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate"></a>

```go
func IsPrivate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SecureSourceManagerInstancePrivateConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---


### SecureSourceManagerInstanceTimeoutsOutputReference <a name="SecureSourceManagerInstanceTimeoutsOutputReference" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.NewSecureSourceManagerInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecureSourceManagerInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference <a name="SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/securesourcemanagerinstance"

securesourcemanagerinstance.NewSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SecureSourceManagerInstanceWorkforceIdentityFederationConfig
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---



