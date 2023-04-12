# `computeGlobalAddress` Submodule <a name="`computeGlobalAddress` Submodule" id="@cdktf/provider-google.computeGlobalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalAddress <a name="ComputeGlobalAddress" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_global_address google_compute_global_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

computeglobaladdress.NewComputeGlobalAddress(scope Construct, id *string, config ComputeGlobalAddressConfig) ComputeGlobalAddress
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig">ComputeGlobalAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig">ComputeGlobalAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddressType">ResetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPrefixLength">ResetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.putTimeouts"></a>

```go
func PutTimeouts(value ComputeGlobalAddressTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetAddressType` <a name="ResetAddressType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddressType"></a>

```go
func ResetAddressType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetId"></a>

```go
func ResetId()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetIpVersion"></a>

```go
func ResetIpVersion()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPrefixLength` <a name="ResetPrefixLength" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPrefixLength"></a>

```go
func ResetPrefixLength()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

computeglobaladdress.ComputeGlobalAddress_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

computeglobaladdress.ComputeGlobalAddress_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

computeglobaladdress.ComputeGlobalAddress_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference">ComputeGlobalAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressTypeInput">AddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersionInput">IpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLengthInput">PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressType">AddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeouts"></a>

```go
func Timeouts() ComputeGlobalAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference">ComputeGlobalAddressTimeoutsOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressTypeInput"></a>

```go
func AddressTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersionInput"></a>

```go
func IpVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PrefixLengthInput`<sup>Optional</sup> <a name="PrefixLengthInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLengthInput"></a>

```go
func PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressType"></a>

```go
func AddressType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLength"></a>

```go
func PrefixLength() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalAddressConfig <a name="ComputeGlobalAddressConfig" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

&computeglobaladdress.ComputeGlobalAddressConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Address: *string,
	AddressType: *string,
	Description: *string,
	Id: *string,
	IpVersion: *string,
	Network: *string,
	PrefixLength: *f64,
	Project: *string,
	Purpose: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeGlobalAddress.ComputeGlobalAddressTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.address">Address</a></code> | <code>*string</code> | The IP address or beginning of the address range represented by this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.addressType">AddressType</a></code> | <code>*string</code> | The type of the address to reserve. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#id ComputeGlobalAddress#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.ipVersion">IpVersion</a></code> | <code>*string</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.network">Network</a></code> | <code>*string</code> | The URL of the network in which to reserve the IP range. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | The prefix length of the IP range. If not present, it means the address field is a single IP address. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#project ComputeGlobalAddress#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.purpose">Purpose</a></code> | <code>*string</code> | The purpose of the resource. Possible values include:. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#name ComputeGlobalAddress#name}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The IP address or beginning of the address range represented by this resource.

This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#address ComputeGlobalAddress#address}

---

##### `AddressType`<sup>Optional</sup> <a name="AddressType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.addressType"></a>

```go
AddressType *string
```

- *Type:* *string

The type of the address to reserve.

EXTERNAL indicates public/external single IP address.
INTERNAL indicates internal IP ranges belonging to some network. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#address_type ComputeGlobalAddress#address_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#description ComputeGlobalAddress#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#id ComputeGlobalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.ipVersion"></a>

```go
IpVersion *string
```

- *Type:* *string

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#ip_version ComputeGlobalAddress#ip_version}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The URL of the network in which to reserve the IP range.

The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#network ComputeGlobalAddress#network}

---

##### `PrefixLength`<sup>Optional</sup> <a name="PrefixLength" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.prefixLength"></a>

```go
PrefixLength *f64
```

- *Type:* *f64

The prefix length of the IP range. If not present, it means the address field is a single IP address.

This field is not applicable to addresses with addressType=EXTERNAL,
or addressType=INTERNAL when purpose=PRIVATE_SERVICE_CONNECT

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#prefix_length ComputeGlobalAddress#prefix_length}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#project ComputeGlobalAddress#project}.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

The purpose of the resource. Possible values include:.

VPC_PEERING - for peer networks

PRIVATE_SERVICE_CONNECT - for ([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html) only) Private Service Connect networks

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#purpose ComputeGlobalAddress#purpose}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.timeouts"></a>

```go
Timeouts ComputeGlobalAddressTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#timeouts ComputeGlobalAddress#timeouts}

---

### ComputeGlobalAddressTimeouts <a name="ComputeGlobalAddressTimeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

&computeglobaladdress.ComputeGlobalAddressTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#create ComputeGlobalAddress#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#delete ComputeGlobalAddress#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#create ComputeGlobalAddress#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_address#delete ComputeGlobalAddress#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalAddressTimeoutsOutputReference <a name="ComputeGlobalAddressTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobaladdress"

computeglobaladdress.NewComputeGlobalAddressTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeGlobalAddressTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



