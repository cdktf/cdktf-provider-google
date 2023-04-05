# `computeManagedSslCertificate` Submodule <a name="`computeManagedSslCertificate` Submodule" id="@cdktf/provider-google.computeManagedSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeManagedSslCertificate <a name="ComputeManagedSslCertificate" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate google_compute_managed_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

computemanagedsslcertificate.NewComputeManagedSslCertificate(scope Construct, id *string, config ComputeManagedSslCertificateConfig) ComputeManagedSslCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig">ComputeManagedSslCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig">ComputeManagedSslCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged">PutManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutManaged` <a name="PutManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged"></a>

```go
func PutManaged(value ComputeManagedSslCertificateManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts"></a>

```go
func PutTimeouts(value ComputeManagedSslCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

---

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetManaged"></a>

```go
func ResetManaged()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

computemanagedsslcertificate.ComputeManagedSslCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

computemanagedsslcertificate.ComputeManagedSslCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

computemanagedsslcertificate.ComputeManagedSslCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managed">Managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference">ComputeManagedSslCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference">ComputeManagedSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateIdInput">CertificateIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managedInput">ManagedInput</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateId">CertificateId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managed"></a>

```go
func Managed() ComputeManagedSslCertificateManagedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference">ComputeManagedSslCertificateManagedOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeouts"></a>

```go
func Timeouts() ComputeManagedSslCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference">ComputeManagedSslCertificateTimeoutsOutputReference</a>

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateIdInput"></a>

```go
func CertificateIdInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managedInput"></a>

```go
func ManagedInput() ComputeManagedSslCertificateManaged
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateId"></a>

```go
func CertificateId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeManagedSslCertificateConfig <a name="ComputeManagedSslCertificateConfig" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

&computemanagedsslcertificate.ComputeManagedSslCertificateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateId: *f64,
	Description: *string,
	Id: *string,
	Managed: github.com/cdktf/cdktf-provider-google-go/google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged,
	Name: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.certificateId">CertificateId</a></code> | <code>*f64</code> | The unique identifier for the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.managed">Managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.type">Type</a></code> | <code>*string</code> | Enum field whose value is always 'MANAGED' - used to signal to the API which type this is. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.certificateId"></a>

```go
CertificateId *f64
```

- *Type:* *f64

The unique identifier for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#certificate_id ComputeManagedSslCertificate#certificate_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#description ComputeManagedSslCertificate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.managed"></a>

```go
Managed ComputeManagedSslCertificateManaged
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#managed ComputeManagedSslCertificate#managed}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#name ComputeManagedSslCertificate#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.timeouts"></a>

```go
Timeouts ComputeManagedSslCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#timeouts ComputeManagedSslCertificate#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Enum field whose value is always 'MANAGED' - used to signal to the API which type this is.

Default value: "MANAGED" Possible values: ["MANAGED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#type ComputeManagedSslCertificate#type}

---

### ComputeManagedSslCertificateManaged <a name="ComputeManagedSslCertificateManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

&computemanagedsslcertificate.ComputeManagedSslCertificateManaged {
	Domains: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.property.domains">Domains</a></code> | <code>*[]*string</code> | Domains for which a managed SSL certificate will be valid. |

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

Domains for which a managed SSL certificate will be valid.

Currently,
there can be up to 100 domains in this list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#domains ComputeManagedSslCertificate#domains}

---

### ComputeManagedSslCertificateTimeouts <a name="ComputeManagedSslCertificateTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

&computemanagedsslcertificate.ComputeManagedSslCertificateTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeManagedSslCertificateManagedOutputReference <a name="ComputeManagedSslCertificateManagedOutputReference" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

computemanagedsslcertificate.NewComputeManagedSslCertificateManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeManagedSslCertificateManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeManagedSslCertificateManaged
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---


### ComputeManagedSslCertificateTimeoutsOutputReference <a name="ComputeManagedSslCertificateTimeoutsOutputReference" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computemanagedsslcertificate"

computemanagedsslcertificate.NewComputeManagedSslCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeManagedSslCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



