# `certificateManagerDnsAuthorization` Submodule <a name="`certificateManagerDnsAuthorization` Submodule" id="@cdktf/provider-google.certificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerDnsAuthorization <a name="CertificateManagerDnsAuthorization" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.NewCertificateManagerDnsAuthorization(scope Construct, id *string, config CertificateManagerDnsAuthorizationConfig) CertificateManagerDnsAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig">CertificateManagerDnsAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig">CertificateManagerDnsAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts"></a>

```go
func PutTimeouts(value CertificateManagerDnsAuthorizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.CertificateManagerDnsAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.CertificateManagerDnsAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.CertificateManagerDnsAuthorization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord">DnsResourceRecord</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsResourceRecord`<sup>Required</sup> <a name="DnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```go
func DnsResourceRecord() CertificateManagerDnsAuthorizationDnsResourceRecordList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts"></a>

```go
func Timeouts() CertificateManagerDnsAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerDnsAuthorizationConfig <a name="CertificateManagerDnsAuthorizationConfig" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

&certificatemanagerdnsauthorization.CertificateManagerDnsAuthorizationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain">Domain</a></code> | <code>*string</code> | A domain which is being authorized. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the DNS Authorization resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#domain CertificateManagerDnsAuthorization#domain}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#name CertificateManagerDnsAuthorization#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#description CertificateManagerDnsAuthorization#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the DNS Authorization resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#labels CertificateManagerDnsAuthorization#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts"></a>

```go
Timeouts CertificateManagerDnsAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#timeouts CertificateManagerDnsAuthorization#timeouts}

---

### CertificateManagerDnsAuthorizationDnsResourceRecord <a name="CertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

&certificatemanagerdnsauthorization.CertificateManagerDnsAuthorizationDnsResourceRecord {

}
```


### CertificateManagerDnsAuthorizationTimeouts <a name="CertificateManagerDnsAuthorizationTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

&certificatemanagerdnsauthorization.CertificateManagerDnsAuthorizationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerDnsAuthorizationDnsResourceRecordList <a name="CertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.NewCertificateManagerDnsAuthorizationDnsResourceRecordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificateManagerDnsAuthorizationDnsResourceRecordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```go
func Get(index *f64) CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.NewCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateManagerDnsAuthorizationDnsResourceRecord
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a>

---


### CertificateManagerDnsAuthorizationTimeoutsOutputReference <a name="CertificateManagerDnsAuthorizationTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/certificatemanagerdnsauthorization"

certificatemanagerdnsauthorization.NewCertificateManagerDnsAuthorizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateManagerDnsAuthorizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



