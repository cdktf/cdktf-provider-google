# `kmsKeyRingIamBinding` Submodule <a name="`kmsKeyRingIamBinding` Submodule" id="@cdktf/provider-google.kmsKeyRingIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyRingIamBinding <a name="KmsKeyRingIamBinding" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding google_kms_key_ring_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

kmskeyringiambinding.NewKmsKeyRingIamBinding(scope Construct, id *string, config KmsKeyRingIamBindingConfig) KmsKeyRingIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig">KmsKeyRingIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig">KmsKeyRingIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.putCondition"></a>

```go
func PutCondition(value KmsKeyRingIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsKeyRingIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

kmskeyringiambinding.KmsKeyRingIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

kmskeyringiambinding.KmsKeyRingIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

kmskeyringiambinding.KmsKeyRingIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

kmskeyringiambinding.KmsKeyRingIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsKeyRingIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsKeyRingIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsKeyRingIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyRingIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference">KmsKeyRingIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.keyRingIdInput">KeyRingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.keyRingId">KeyRingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.condition"></a>

```go
func Condition() KmsKeyRingIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference">KmsKeyRingIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.conditionInput"></a>

```go
func ConditionInput() KmsKeyRingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyRingIdInput`<sup>Optional</sup> <a name="KeyRingIdInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.keyRingIdInput"></a>

```go
func KeyRingIdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyRingId`<sup>Required</sup> <a name="KeyRingId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.keyRingId"></a>

```go
func KeyRingId() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyRingIamBindingCondition <a name="KmsKeyRingIamBindingCondition" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

&kmskeyringiambinding.KmsKeyRingIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#expression KmsKeyRingIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#title KmsKeyRingIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#description KmsKeyRingIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#expression KmsKeyRingIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#title KmsKeyRingIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#description KmsKeyRingIamBinding#description}.

---

### KmsKeyRingIamBindingConfig <a name="KmsKeyRingIamBindingConfig" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

&kmskeyringiambinding.KmsKeyRingIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyRingId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v16.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.keyRingId">KeyRingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#key_ring_id KmsKeyRingIamBinding#key_ring_id}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#members KmsKeyRingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#role KmsKeyRingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#id KmsKeyRingIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyRingId`<sup>Required</sup> <a name="KeyRingId" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.keyRingId"></a>

```go
KeyRingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#key_ring_id KmsKeyRingIamBinding#key_ring_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#members KmsKeyRingIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#role KmsKeyRingIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.condition"></a>

```go
Condition KmsKeyRingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#condition KmsKeyRingIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/kms_key_ring_iam_binding#id KmsKeyRingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyRingIamBindingConditionOutputReference <a name="KmsKeyRingIamBindingConditionOutputReference" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/kmskeyringiambinding"

kmskeyringiambinding.NewKmsKeyRingIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsKeyRingIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsKeyRingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamBinding.KmsKeyRingIamBindingCondition">KmsKeyRingIamBindingCondition</a>

---



