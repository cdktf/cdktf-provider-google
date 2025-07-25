# `kmsCryptoKeyVersion` Submodule <a name="`kmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google.kmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKeyVersion <a name="KmsCryptoKeyVersion" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersion(scope Construct, id *string, config KmsCryptoKeyVersionConfig) KmsCryptoKeyVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig">KmsCryptoKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig">KmsCryptoKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putExternalProtectionLevelOptions">PutExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetExternalProtectionLevelOptions">ResetExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalProtectionLevelOptions` <a name="PutExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putExternalProtectionLevelOptions"></a>

```go
func PutExternalProtectionLevelOptions(value KmsCryptoKeyVersionExternalProtectionLevelOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putExternalProtectionLevelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putTimeouts"></a>

```go
func PutTimeouts(value KmsCryptoKeyVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a>

---

##### `ResetExternalProtectionLevelOptions` <a name="ResetExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetExternalProtectionLevelOptions"></a>

```go
func ResetExternalProtectionLevelOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.KmsCryptoKeyVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.KmsCryptoKeyVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.KmsCryptoKeyVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.KmsCryptoKeyVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsCryptoKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.attestation">Attestation</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList">KmsCryptoKeyVersionAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptions">ExternalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.generateTime">GenerateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference">KmsCryptoKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput">ExternalProtectionLevelOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.attestation"></a>

```go
func Attestation() KmsCryptoKeyVersionAttestationList
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList">KmsCryptoKeyVersionAttestationList</a>

---

##### `ExternalProtectionLevelOptions`<sup>Required</sup> <a name="ExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptions"></a>

```go
func ExternalProtectionLevelOptions() KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a>

---

##### `GenerateTime`<sup>Required</sup> <a name="GenerateTime" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.generateTime"></a>

```go
func GenerateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeouts"></a>

```go
func Timeouts() KmsCryptoKeyVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference">KmsCryptoKeyVersionTimeoutsOutputReference</a>

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```go
func CryptoKeyInput() *string
```

- *Type:* *string

---

##### `ExternalProtectionLevelOptionsInput`<sup>Optional</sup> <a name="ExternalProtectionLevelOptionsInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput"></a>

```go
func ExternalProtectionLevelOptionsInput() KmsCryptoKeyVersionExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKey"></a>

```go
func CryptoKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyVersionAttestation <a name="KmsCryptoKeyVersionAttestation" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

&kmscryptokeyversion.KmsCryptoKeyVersionAttestation {

}
```


### KmsCryptoKeyVersionAttestationCertChains <a name="KmsCryptoKeyVersionAttestationCertChains" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

&kmscryptokeyversion.KmsCryptoKeyVersionAttestationCertChains {

}
```


### KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions <a name="KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

&kmscryptokeyversion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions {

}
```


### KmsCryptoKeyVersionConfig <a name="KmsCryptoKeyVersionConfig" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

&kmscryptokeyversion.KmsCryptoKeyVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CryptoKey: *string,
	ExternalProtectionLevelOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions,
	Id: *string,
	State: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions">ExternalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#id KmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.state">State</a></code> | <code>*string</code> | The current state of the CryptoKeyVersion. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```go
CryptoKey *string
```

- *Type:* *string

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#crypto_key KmsCryptoKeyVersion#crypto_key}

---

##### `ExternalProtectionLevelOptions`<sup>Optional</sup> <a name="ExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions"></a>

```go
ExternalProtectionLevelOptions KmsCryptoKeyVersionExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#external_protection_level_options KmsCryptoKeyVersion#external_protection_level_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#id KmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The current state of the CryptoKeyVersion.

Note: you can only specify this field to manually 'ENABLE' or 'DISABLE' the CryptoKeyVersion,
otherwise the value of this field is always retrieved automatically. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#state KmsCryptoKeyVersion#state}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.timeouts"></a>

```go
Timeouts KmsCryptoKeyVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#timeouts KmsCryptoKeyVersion#timeouts}

---

### KmsCryptoKeyVersionExternalProtectionLevelOptions <a name="KmsCryptoKeyVersionExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

&kmscryptokeyversion.KmsCryptoKeyVersionExternalProtectionLevelOptions {
	EkmConnectionKeyPath: *string,
	ExternalKeyUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath">EkmConnectionKeyPath</a></code> | <code>*string</code> | The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri">ExternalKeyUri</a></code> | <code>*string</code> | The URI for an external resource that this CryptoKeyVersion represents. |

---

##### `EkmConnectionKeyPath`<sup>Optional</sup> <a name="EkmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath"></a>

```go
EkmConnectionKeyPath *string
```

- *Type:* *string

The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#ekm_connection_key_path KmsCryptoKeyVersion#ekm_connection_key_path}

---

##### `ExternalKeyUri`<sup>Optional</sup> <a name="ExternalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri"></a>

```go
ExternalKeyUri *string
```

- *Type:* *string

The URI for an external resource that this CryptoKeyVersion represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#external_key_uri KmsCryptoKeyVersion#external_key_uri}

---

### KmsCryptoKeyVersionTimeouts <a name="KmsCryptoKeyVersionTimeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

&kmscryptokeyversion.KmsCryptoKeyVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#create KmsCryptoKeyVersion#create}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#delete KmsCryptoKeyVersion#delete}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#update KmsCryptoKeyVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#create KmsCryptoKeyVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#delete KmsCryptoKeyVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_crypto_key_version#update KmsCryptoKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyVersionAttestationCertChainsList <a name="KmsCryptoKeyVersionAttestationCertChainsList" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionAttestationCertChainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsCryptoKeyVersionAttestationCertChainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.get"></a>

```go
func Get(index *f64) KmsCryptoKeyVersionAttestationCertChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsCryptoKeyVersionAttestationCertChainsOutputReference <a name="KmsCryptoKeyVersionAttestationCertChainsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionAttestationCertChainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsCryptoKeyVersionAttestationCertChainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts">CaviumCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts">GoogleCardCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts">GooglePartitionCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains">KmsCryptoKeyVersionAttestationCertChains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaviumCerts`<sup>Required</sup> <a name="CaviumCerts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts"></a>

```go
func CaviumCerts() *[]*string
```

- *Type:* *[]*string

---

##### `GoogleCardCerts`<sup>Required</sup> <a name="GoogleCardCerts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts"></a>

```go
func GoogleCardCerts() *[]*string
```

- *Type:* *[]*string

---

##### `GooglePartitionCerts`<sup>Required</sup> <a name="GooglePartitionCerts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts"></a>

```go
func GooglePartitionCerts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsCryptoKeyVersionAttestationCertChains
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains">KmsCryptoKeyVersionAttestationCertChains</a>

---


### KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList <a name="KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get"></a>

```go
func Get(index *f64) KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference <a name="KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">EkmConnectionKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">ExternalKeyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EkmConnectionKeyPath`<sup>Required</sup> <a name="EkmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```go
func EkmConnectionKeyPath() *string
```

- *Type:* *string

---

##### `ExternalKeyUri`<sup>Required</sup> <a name="ExternalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```go
func ExternalKeyUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a>

---


### KmsCryptoKeyVersionAttestationList <a name="KmsCryptoKeyVersionAttestationList" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionAttestationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsCryptoKeyVersionAttestationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.get"></a>

```go
func Get(index *f64) KmsCryptoKeyVersionAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsCryptoKeyVersionAttestationOutputReference <a name="KmsCryptoKeyVersionAttestationOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionAttestationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsCryptoKeyVersionAttestationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.certChains">CertChains</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList">KmsCryptoKeyVersionAttestationCertChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions">ExternalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation">KmsCryptoKeyVersionAttestation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertChains`<sup>Required</sup> <a name="CertChains" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.certChains"></a>

```go
func CertChains() KmsCryptoKeyVersionAttestationCertChainsList
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList">KmsCryptoKeyVersionAttestationCertChainsList</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ExternalProtectionLevelOptions`<sup>Required</sup> <a name="ExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions"></a>

```go
func ExternalProtectionLevelOptions() KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsCryptoKeyVersionAttestation
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation">KmsCryptoKeyVersionAttestation</a>

---


### KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference <a name="KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath">ResetEkmConnectionKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri">ResetExternalKeyUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEkmConnectionKeyPath` <a name="ResetEkmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath"></a>

```go
func ResetEkmConnectionKeyPath()
```

##### `ResetExternalKeyUri` <a name="ResetExternalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri"></a>

```go
func ResetExternalKeyUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput">EkmConnectionKeyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput">ExternalKeyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">EkmConnectionKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">ExternalKeyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EkmConnectionKeyPathInput`<sup>Optional</sup> <a name="EkmConnectionKeyPathInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput"></a>

```go
func EkmConnectionKeyPathInput() *string
```

- *Type:* *string

---

##### `ExternalKeyUriInput`<sup>Optional</sup> <a name="ExternalKeyUriInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput"></a>

```go
func ExternalKeyUriInput() *string
```

- *Type:* *string

---

##### `EkmConnectionKeyPath`<sup>Required</sup> <a name="EkmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```go
func EkmConnectionKeyPath() *string
```

- *Type:* *string

---

##### `ExternalKeyUri`<sup>Required</sup> <a name="ExternalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```go
func ExternalKeyUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsCryptoKeyVersionExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---


### KmsCryptoKeyVersionTimeoutsOutputReference <a name="KmsCryptoKeyVersionTimeoutsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmscryptokeyversion"

kmscryptokeyversion.NewKmsCryptoKeyVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsCryptoKeyVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



