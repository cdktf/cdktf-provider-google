# `iamWorkloadIdentityPoolProvider` Submodule <a name="`iamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolProvider <a name="IamWorkloadIdentityPoolProvider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProvider(scope Construct, id *string, config IamWorkloadIdentityPoolProviderConfig) IamWorkloadIdentityPoolProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig">IamWorkloadIdentityPoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig">IamWorkloadIdentityPoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509">PutX509</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition">ResetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping">ResetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc">ResetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetX509">ResetX509</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws"></a>

```go
func PutAws(value IamWorkloadIdentityPoolProviderAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc"></a>

```go
func PutOidc(value IamWorkloadIdentityPoolProviderOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml"></a>

```go
func PutSaml(value IamWorkloadIdentityPoolProviderSaml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts"></a>

```go
func PutTimeouts(value IamWorkloadIdentityPoolProviderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

---

##### `PutX509` <a name="PutX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509"></a>

```go
func PutX509(value IamWorkloadIdentityPoolProviderX509)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putX509.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---

##### `ResetAttributeCondition` <a name="ResetAttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition"></a>

```go
func ResetAttributeCondition()
```

##### `ResetAttributeMapping` <a name="ResetAttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping"></a>

```go
func ResetAttributeMapping()
```

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws"></a>

```go
func ResetAws()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetOidc` <a name="ResetOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc"></a>

```go
func ResetOidc()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetSaml"></a>

```go
func ResetSaml()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetX509` <a name="ResetX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetX509"></a>

```go
func ResetX509()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamWorkloadIdentityPoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamWorkloadIdentityPoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference">IamWorkloadIdentityPoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509">X509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference">IamWorkloadIdentityPoolProviderX509OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput">AttributeConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput">AttributeMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput">AwsInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput">OidcInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.samlInput">SamlInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">WorkloadIdentityPoolProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509Input">X509Input</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition">AttributeCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping">AttributeMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">WorkloadIdentityPoolProviderId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws"></a>

```go
func Aws() IamWorkloadIdentityPoolProviderAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc"></a>

```go
func Oidc() IamWorkloadIdentityPoolProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.saml"></a>

```go
func Saml() IamWorkloadIdentityPoolProviderSamlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference">IamWorkloadIdentityPoolProviderSamlOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts"></a>

```go
func Timeouts() IamWorkloadIdentityPoolProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a>

---

##### `X509`<sup>Required</sup> <a name="X509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509"></a>

```go
func X509() IamWorkloadIdentityPoolProviderX509OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference">IamWorkloadIdentityPoolProviderX509OutputReference</a>

---

##### `AttributeConditionInput`<sup>Optional</sup> <a name="AttributeConditionInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput"></a>

```go
func AttributeConditionInput() *string
```

- *Type:* *string

---

##### `AttributeMappingInput`<sup>Optional</sup> <a name="AttributeMappingInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput"></a>

```go
func AttributeMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput"></a>

```go
func AwsInput() IamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput"></a>

```go
func OidcInput() IamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.samlInput"></a>

```go
func SamlInput() IamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```go
func WorkloadIdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolProviderIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```go
func WorkloadIdentityPoolProviderIdInput() *string
```

- *Type:* *string

---

##### `X509Input`<sup>Optional</sup> <a name="X509Input" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.x509Input"></a>

```go
func X509Input() IamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---

##### `AttributeCondition`<sup>Required</sup> <a name="AttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```go
func AttributeCondition() *string
```

- *Type:* *string

---

##### `AttributeMapping`<sup>Required</sup> <a name="AttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```go
func AttributeMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```go
func WorkloadIdentityPoolId() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolProviderId`<sup>Required</sup> <a name="WorkloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```go
func WorkloadIdentityPoolProviderId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolProviderAws <a name="IamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderAws {
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId">AccountId</a></code> | <code>*string</code> | The AWS account ID. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}

---

### IamWorkloadIdentityPoolProviderConfig <a name="IamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkloadIdentityPoolId: *string,
	WorkloadIdentityPoolProviderId: *string,
	AttributeCondition: *string,
	AttributeMapping: *map[string]*string,
	Aws: github.com/cdktf/cdktf-provider-google-go/google/v16.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws,
	Description: *string,
	Disabled: interface{},
	DisplayName: *string,
	Id: *string,
	Oidc: github.com/cdktf/cdktf-provider-google-go/google/v16.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc,
	Project: *string,
	Saml: github.com/cdktf/cdktf-provider-google-go/google/v16.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts,
	X509: github.com/cdktf/cdktf-provider-google-go/google/v16.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">WorkloadIdentityPoolProviderId</a></code> | <code>*string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition">AttributeCondition</a></code> | <code>*string</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping">AttributeMapping</a></code> | <code>*map[string]*string</code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description">Description</a></code> | <code>*string</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.x509">X509</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | x509 block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```go
WorkloadIdentityPoolId *string
```

- *Type:* *string

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolProviderId`<sup>Required</sup> <a name="WorkloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```go
WorkloadIdentityPoolProviderId *string
```

- *Type:* *string

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `AttributeCondition`<sup>Optional</sup> <a name="AttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition"></a>

```go
AttributeCondition *string
```

- *Type:* *string

[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `AttributeMapping`<sup>Optional</sup> <a name="AttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping"></a>

```go
AttributeMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value
  in IAM bindings. This is also the subject that appears in Cloud Logging logs.
  Cannot exceed 127 characters.
* 'google.groups': Groups the external identity belongs to. You can grant groups
  access to resources using an IAM 'principalSet' binding; access applies to all
  members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:

* If no attribute mapping is defined, the following default mapping applies:

  ```
  {
    "google.subject":"assertion.arn",
    "attribute.aws_role":
      "assertion.arn.contains('assumed-role')"
      " ? assertion.arn.extract('{account_arn}assumed-role/')"
      "   + 'assumed-role/'"
      "   + assertion.arn.extract('assumed-role/{role_name}/')"
      " : assertion.arn",
  }
  ```
* If any custom attribute mappings are defined, they must include a mapping to the
  'google.subject' attribute.

For OIDC providers, the following rules apply:

* Custom attribute mappings must be defined, and must include a mapping to the
  'google.subject' attribute. For example, the following maps the 'sub' claim of the
  incoming credential to the 'subject' attribute on a Google token.

  ```
  {"google.subject": "assertion.sub"}
  ```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws"></a>

```go
Aws IamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Oidc`<sup>Optional</sup> <a name="Oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc"></a>

```go
Oidc IamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}.

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.saml"></a>

```go
Saml IamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#saml IamWorkloadIdentityPoolProvider#saml}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts"></a>

```go
Timeouts IamWorkloadIdentityPoolProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}

---

##### `X509`<sup>Optional</sup> <a name="X509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.x509"></a>

```go
X509 IamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

x509 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#x509 IamWorkloadIdentityPoolProvider#x509}

---

### IamWorkloadIdentityPoolProviderOidc <a name="IamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderOidc {
	IssuerUri: *string,
	AllowedAudiences: *[]*string,
	JwksJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | The OIDC issuer URL. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | Acceptable values for the 'aud' field (audience) in the OIDC token. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.jwksJson">JwksJson</a></code> | <code>*string</code> | OIDC JWKs in JSON String format. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri"></a>

```go
IssuerUri *string
```

- *Type:* *string

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences"></a>

```go
AllowedAudiences *[]*string
```

- *Type:* *[]*string

Acceptable values for the 'aud' field (audience) in the OIDC token.

Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:

```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.jwksJson"></a>

```go
JwksJson *string
```

- *Type:* *string

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#jwks_json IamWorkloadIdentityPoolProvider#jwks_json}

---

### IamWorkloadIdentityPoolProviderSaml <a name="IamWorkloadIdentityPoolProviderSaml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderSaml {
	IdpMetadataXml: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml.property.idpMetadataXml"></a>

```go
IdpMetadataXml *string
```

- *Type:* *string

SAML Identity provider configuration metadata xml doc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#idp_metadata_xml IamWorkloadIdentityPoolProvider#idp_metadata_xml}

---

### IamWorkloadIdentityPoolProviderTimeouts <a name="IamWorkloadIdentityPoolProviderTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}.

---

### IamWorkloadIdentityPoolProviderX509 <a name="IamWorkloadIdentityPoolProviderX509" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderX509 {
	TrustStore: github.com/cdktf/cdktf-provider-google-go/google/v16.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.property.trustStore">TrustStore</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | trust_store block. |

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509.property.trustStore"></a>

```go
TrustStore IamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#trust_store IamWorkloadIdentityPoolProvider#trust_store}

---

### IamWorkloadIdentityPoolProviderX509TrustStore <a name="IamWorkloadIdentityPoolProviderX509TrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderX509TrustStore {
	TrustAnchors: interface{},
	IntermediateCas: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.trustAnchors">TrustAnchors</a></code> | <code>interface{}</code> | trust_anchors block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.intermediateCas">IntermediateCas</a></code> | <code>interface{}</code> | intermediate_cas block. |

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.trustAnchors"></a>

```go
TrustAnchors interface{}
```

- *Type:* interface{}

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#trust_anchors IamWorkloadIdentityPoolProvider#trust_anchors}

---

##### `IntermediateCas`<sup>Optional</sup> <a name="IntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore.property.intermediateCas"></a>

```go
IntermediateCas interface{}
```

- *Type:* interface{}

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#intermediate_cas IamWorkloadIdentityPoolProvider#intermediate_cas}

---

### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas {
	PemCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `PemCertificate`<sup>Optional</sup> <a name="PemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.property.pemCertificate"></a>

```go
PemCertificate *string
```

- *Type:* *string

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}

---

### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

&iamworkloadidentitypoolprovider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors {
	PemCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `PemCertificate`<sup>Optional</sup> <a name="PemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.property.pemCertificate"></a>

```go
PemCertificate *string
```

- *Type:* *string

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolProviderAwsOutputReference <a name="IamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolProviderAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---


### IamWorkloadIdentityPoolProviderOidcOutputReference <a name="IamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolProviderOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences"></a>

```go
func ResetAllowedAudiences()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetJwksJson"></a>

```go
func ResetJwksJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```go
func AllowedAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput"></a>

```go
func IssuerUriInput() *string
```

- *Type:* *string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```go
func JwksJsonInput() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---


### IamWorkloadIdentityPoolProviderSamlOutputReference <a name="IamWorkloadIdentityPoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolProviderSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXmlInput">IdpMetadataXmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdpMetadataXmlInput`<sup>Optional</sup> <a name="IdpMetadataXmlInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```go
func IdpMetadataXmlInput() *string
```

- *Type:* *string

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```go
func IdpMetadataXml() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderSaml">IamWorkloadIdentityPoolProviderSaml</a>

---


### IamWorkloadIdentityPoolProviderTimeoutsOutputReference <a name="IamWorkloadIdentityPoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolProviderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolProviderX509OutputReference <a name="IamWorkloadIdentityPoolProviderX509OutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderX509OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolProviderX509OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore">PutTrustStore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustStore` <a name="PutTrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore"></a>

```go
func PutTrustStore(value IamWorkloadIdentityPoolProviderX509TrustStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.putTrustStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore">TrustStore</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference">IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStoreInput">TrustStoreInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore"></a>

```go
func TrustStore() IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference">IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference</a>

---

##### `TrustStoreInput`<sup>Optional</sup> <a name="TrustStoreInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.trustStoreInput"></a>

```go
func TrustStoreInput() IamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509">IamWorkloadIdentityPoolProviderX509</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get"></a>

```go
func Get(index *f64) IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resetPemCertificate">ResetPemCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPemCertificate` <a name="ResetPemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resetPemCertificate"></a>

```go
func ResetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificateInput"></a>

```go
func PemCertificateInput() *string
```

- *Type:* *string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate"></a>

```go
func PemCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas">PutIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors">PutTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resetIntermediateCas">ResetIntermediateCas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntermediateCas` <a name="PutIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas"></a>

```go
func PutIntermediateCas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrustAnchors` <a name="PutTrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors"></a>

```go
func PutTrustAnchors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIntermediateCas` <a name="ResetIntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resetIntermediateCas"></a>

```go
func ResetIntermediateCas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas">IntermediateCas</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCasInput">IntermediateCasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchorsInput">TrustAnchorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateCas`<sup>Required</sup> <a name="IntermediateCas" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas"></a>

```go
func IntermediateCas() IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a>

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors"></a>

```go
func TrustAnchors() IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a>

---

##### `IntermediateCasInput`<sup>Optional</sup> <a name="IntermediateCasInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCasInput"></a>

```go
func IntermediateCasInput() interface{}
```

- *Type:* interface{}

---

##### `TrustAnchorsInput`<sup>Optional</sup> <a name="TrustAnchorsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchorsInput"></a>

```go
func TrustAnchorsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStore">IamWorkloadIdentityPoolProviderX509TrustStore</a>

---


### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get"></a>

```go
func Get(index *f64) IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference <a name="IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/iamworkloadidentitypoolprovider"

iamworkloadidentitypoolprovider.NewIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resetPemCertificate">ResetPemCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPemCertificate` <a name="ResetPemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resetPemCertificate"></a>

```go
func ResetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```go
func PemCertificateInput() *string
```

- *Type:* *string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate"></a>

```go
func PemCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



