# `kmsAutokeyConfig` Submodule <a name="`kmsAutokeyConfig` Submodule" id="@cdktf/provider-google.kmsAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsAutokeyConfig <a name="KmsAutokeyConfig" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config google_kms_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

kmsautokeyconfig.NewKmsAutokeyConfig(scope Construct, id *string, config KmsAutokeyConfigConfig) KmsAutokeyConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig">KmsAutokeyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig">KmsAutokeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetKeyProject">ResetKeyProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.putTimeouts"></a>

```go
func PutTimeouts(value KmsAutokeyConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts">KmsAutokeyConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyProject` <a name="ResetKeyProject" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetKeyProject"></a>

```go
func ResetKeyProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsAutokeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

kmsautokeyconfig.KmsAutokeyConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

kmsautokeyconfig.KmsAutokeyConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

kmsautokeyconfig.KmsAutokeyConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

kmsautokeyconfig.KmsAutokeyConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsAutokeyConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsAutokeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference">KmsAutokeyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.keyProjectInput">KeyProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.keyProject">KeyProject</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.timeouts"></a>

```go
func Timeouts() KmsAutokeyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference">KmsAutokeyConfigTimeoutsOutputReference</a>

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyProjectInput`<sup>Optional</sup> <a name="KeyProjectInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.keyProjectInput"></a>

```go
func KeyProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyProject`<sup>Required</sup> <a name="KeyProject" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.keyProject"></a>

```go
func KeyProject() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsAutokeyConfigConfig <a name="KmsAutokeyConfigConfig" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

&kmsautokeyconfig.KmsAutokeyConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Folder: *string,
	Id: *string,
	KeyProject: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.kmsAutokeyConfig.KmsAutokeyConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.folder">Folder</a></code> | <code>*string</code> | The folder for which to retrieve config. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#id KmsAutokeyConfig#id}. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.keyProject">KeyProject</a></code> | <code>*string</code> | The target key project for a given folder where KMS Autokey will provision a CryptoKey for any new KeyHandle the Developer creates. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts">KmsAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The folder for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#folder KmsAutokeyConfig#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#id KmsAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyProject`<sup>Optional</sup> <a name="KeyProject" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.keyProject"></a>

```go
KeyProject *string
```

- *Type:* *string

The target key project for a given folder where KMS Autokey will provision a CryptoKey for any new KeyHandle the Developer creates.

Should have the form
'projects/<project_id_or_number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#key_project KmsAutokeyConfig#key_project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigConfig.property.timeouts"></a>

```go
Timeouts KmsAutokeyConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts">KmsAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#timeouts KmsAutokeyConfig#timeouts}

---

### KmsAutokeyConfigTimeouts <a name="KmsAutokeyConfigTimeouts" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

&kmsautokeyconfig.KmsAutokeyConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#create KmsAutokeyConfig#create}. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#delete KmsAutokeyConfig#delete}. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#update KmsAutokeyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#create KmsAutokeyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#delete KmsAutokeyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_autokey_config#update KmsAutokeyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsAutokeyConfigTimeoutsOutputReference <a name="KmsAutokeyConfigTimeoutsOutputReference" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmsautokeyconfig"

kmsautokeyconfig.NewKmsAutokeyConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsAutokeyConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsAutokeyConfig.KmsAutokeyConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



