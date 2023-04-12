# `dataGooglePrivatecaCertificateAuthority` Submodule <a name="`dataGooglePrivatecaCertificateAuthority` Submodule" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePrivatecaCertificateAuthority <a name="DataGooglePrivatecaCertificateAuthority" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority google_privateca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthority(scope Construct, id *string, config DataGooglePrivatecaCertificateAuthorityConfig) DataGooglePrivatecaCertificateAuthority
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig">DataGooglePrivatecaCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig">DataGooglePrivatecaCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetCertificateAuthorityId">ResetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetPool">ResetPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCertificateAuthorityId` <a name="ResetCertificateAuthorityId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetCertificateAuthorityId"></a>

```go
func ResetCertificateAuthorityId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPool` <a name="ResetPool" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetPool"></a>

```go
func ResetPool()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthority_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthority_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthority_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.accessUrls">AccessUrls</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList">DataGooglePrivatecaCertificateAuthorityAccessUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList">DataGooglePrivatecaCertificateAuthorityConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletion">IgnoreActiveCertificatesOnDeletion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.keySpec">KeySpec</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList">DataGooglePrivatecaCertificateAuthorityKeySpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.lifetime">Lifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pemCaCertificate">PemCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pemCaCertificates">PemCaCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pemCsr">PemCsr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.skipGracePeriod">SkipGracePeriod</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.subordinateConfig">SubordinateConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList">DataGooglePrivatecaCertificateAuthoritySubordinateConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.poolInput">PoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pool">Pool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessUrls`<sup>Required</sup> <a name="AccessUrls" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.accessUrls"></a>

```go
func AccessUrls() DataGooglePrivatecaCertificateAuthorityAccessUrlsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList">DataGooglePrivatecaCertificateAuthorityAccessUrlsList</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.config"></a>

```go
func Config() DataGooglePrivatecaCertificateAuthorityConfigAList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList">DataGooglePrivatecaCertificateAuthorityConfigAList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.gcsBucket"></a>

```go
func GcsBucket() *string
```

- *Type:* *string

---

##### `IgnoreActiveCertificatesOnDeletion`<sup>Required</sup> <a name="IgnoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletion"></a>

```go
func IgnoreActiveCertificatesOnDeletion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.keySpec"></a>

```go
func KeySpec() DataGooglePrivatecaCertificateAuthorityKeySpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList">DataGooglePrivatecaCertificateAuthorityKeySpecList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.lifetime"></a>

```go
func Lifetime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PemCaCertificate`<sup>Required</sup> <a name="PemCaCertificate" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pemCaCertificate"></a>

```go
func PemCaCertificate() *string
```

- *Type:* *string

---

##### `PemCaCertificates`<sup>Required</sup> <a name="PemCaCertificates" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pemCaCertificates"></a>

```go
func PemCaCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `PemCsr`<sup>Required</sup> <a name="PemCsr" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pemCsr"></a>

```go
func PemCsr() *string
```

- *Type:* *string

---

##### `SkipGracePeriod`<sup>Required</sup> <a name="SkipGracePeriod" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.skipGracePeriod"></a>

```go
func SkipGracePeriod() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubordinateConfig`<sup>Required</sup> <a name="SubordinateConfig" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.subordinateConfig"></a>

```go
func SubordinateConfig() DataGooglePrivatecaCertificateAuthoritySubordinateConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList">DataGooglePrivatecaCertificateAuthoritySubordinateConfigList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.certificateAuthorityIdInput"></a>

```go
func CertificateAuthorityIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.poolInput"></a>

```go
func PoolInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.certificateAuthorityId"></a>

```go
func CertificateAuthorityId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.pool"></a>

```go
func Pool() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthority.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePrivatecaCertificateAuthorityAccessUrls <a name="DataGooglePrivatecaCertificateAuthorityAccessUrls" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityAccessUrls {

}
```


### DataGooglePrivatecaCertificateAuthorityConfig <a name="DataGooglePrivatecaCertificateAuthorityConfig" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateAuthorityId: *string,
	Id: *string,
	Location: *string,
	Pool: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | The user provided Resource ID for this Certificate Authority. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#id DataGooglePrivatecaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.location">Location</a></code> | <code>*string</code> | Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.pool">Pool</a></code> | <code>*string</code> | The name of the CaPool this Certificate Authority belongs to. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#project DataGooglePrivatecaCertificateAuthority#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateAuthorityId`<sup>Optional</sup> <a name="CertificateAuthorityId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.certificateAuthorityId"></a>

```go
CertificateAuthorityId *string
```

- *Type:* *string

The user provided Resource ID for this Certificate Authority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#certificate_authority_id DataGooglePrivatecaCertificateAuthority#certificate_authority_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#id DataGooglePrivatecaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#location DataGooglePrivatecaCertificateAuthority#location}

---

##### `Pool`<sup>Optional</sup> <a name="Pool" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.pool"></a>

```go
Pool *string
```

- *Type:* *string

The name of the CaPool this Certificate Authority belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#pool DataGooglePrivatecaCertificateAuthority#pool}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#project DataGooglePrivatecaCertificateAuthority#project}.

---

### DataGooglePrivatecaCertificateAuthorityConfigA <a name="DataGooglePrivatecaCertificateAuthorityConfigA" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigA {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509Config <a name="DataGooglePrivatecaCertificateAuthorityConfigX509Config" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509Config {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints {

}
```


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds {

}
```


### DataGooglePrivatecaCertificateAuthorityKeySpec <a name="DataGooglePrivatecaCertificateAuthorityKeySpec" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthorityKeySpec {

}
```


### DataGooglePrivatecaCertificateAuthoritySubordinateConfig <a name="DataGooglePrivatecaCertificateAuthoritySubordinateConfig" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfig {

}
```


### DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain <a name="DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

&datagoogleprivatecacertificateauthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePrivatecaCertificateAuthorityAccessUrlsList <a name="DataGooglePrivatecaCertificateAuthorityAccessUrlsList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityAccessUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityAccessUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference <a name="DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.caCertificateAccessUrl">CaCertificateAccessUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.crlAccessUrls">CrlAccessUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrls">DataGooglePrivatecaCertificateAuthorityAccessUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateAccessUrl`<sup>Required</sup> <a name="CaCertificateAccessUrl" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.caCertificateAccessUrl"></a>

```go
func CaCertificateAccessUrl() *string
```

- *Type:* *string

---

##### `CrlAccessUrls`<sup>Required</sup> <a name="CrlAccessUrls" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.crlAccessUrls"></a>

```go
func CrlAccessUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityAccessUrls
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityAccessUrls">DataGooglePrivatecaCertificateAuthorityAccessUrls</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigAList <a name="DataGooglePrivatecaCertificateAuthorityConfigAList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigAOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigAOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfig">SubjectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.x509Config">X509Config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigA">DataGooglePrivatecaCertificateAuthorityConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubjectConfig`<sup>Required</sup> <a name="SubjectConfig" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfig"></a>

```go
func SubjectConfig() DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList</a>

---

##### `X509Config`<sup>Required</sup> <a name="X509Config" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.x509Config"></a>

```go
func X509Config() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigA
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigA">DataGooglePrivatecaCertificateAuthorityConfigA</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltName">SubjectAltName</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subject"></a>

```go
func Subject() DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList</a>

---

##### `SubjectAltName`<sup>Required</sup> <a name="SubjectAltName" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltName"></a>

```go
func SubjectAltName() DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNames">DnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNames"></a>

```go
func DnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject">DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.critical">Critical</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.critical"></a>

```go
func Critical() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectId"></a>

```go
func ObjectId() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCa">IsCa</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCa">NonCa</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsCa`<sup>Required</sup> <a name="IsCa" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCa"></a>

```go
func IsCa() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxIssuerPathLength`<sup>Required</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```go
func MaxIssuerPathLength() *f64
```

- *Type:* *f64

---

##### `NonCa`<sup>Required</sup> <a name="NonCa" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCa"></a>

```go
func NonCa() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ZeroMaxIssuerPathLength`<sup>Required</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```go
func ZeroMaxIssuerPathLength() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSign">CertSign</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">ContentCommitment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertSign`<sup>Required</sup> <a name="CertSign" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```go
func CertSign() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ContentCommitment`<sup>Required</sup> <a name="ContentCommitment" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```go
func ContentCommitment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```go
func CrlSign() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```go
func DataEncipherment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```go
func DecipherOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```go
func DigitalSignature() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```go
func EncipherOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```go
func KeyAgreement() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```go
func KeyEncipherment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">ClientAuth</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">CodeSigning</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">EmailProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">OcspSigning</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">ServerAuth</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">TimeStamping</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAuth`<sup>Required</sup> <a name="ClientAuth" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```go
func ClientAuth() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```go
func CodeSigning() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EmailProtection`<sup>Required</sup> <a name="EmailProtection" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```go
func EmailProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspSigning`<sup>Required</sup> <a name="OcspSigning" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```go
func OcspSigning() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServerAuth`<sup>Required</sup> <a name="ServerAuth" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```go
func ServerAuth() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TimeStamping`<sup>Required</sup> <a name="TimeStamping" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```go
func TimeStamping() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsage"></a>

```go
func BaseKeyUsage() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList</a>

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList</a>

---

##### `UnknownExtendedKeyUsages`<sup>Required</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```go
func UnknownExtendedKeyUsages() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.critical">Critical</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUris">ExcludedUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUris">PermittedUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.critical"></a>

```go
func Critical() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExcludedDnsNames`<sup>Required</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNames"></a>

```go
func ExcludedDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```go
func ExcludedEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRanges"></a>

```go
func ExcludedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUris`<sup>Required</sup> <a name="ExcludedUris" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUris"></a>

```go
func ExcludedUris() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedDnsNames`<sup>Required</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNames"></a>

```go
func PermittedDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```go
func PermittedEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRanges"></a>

```go
func PermittedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedUris`<sup>Required</sup> <a name="PermittedUris" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUris"></a>

```go
func PermittedUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServers">AiaOcspServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIds">PolicyIds</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509Config">DataGooglePrivatecaCertificateAuthorityConfigX509Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensions"></a>

```go
func AdditionalExtensions() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList</a>

---

##### `AiaOcspServers`<sup>Required</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServers"></a>

```go
func AiaOcspServers() *[]*string
```

- *Type:* *[]*string

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptions"></a>

```go
func CaOptions() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsage"></a>

```go
func KeyUsage() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList</a>

---

##### `NameConstraints`<sup>Required</sup> <a name="NameConstraints" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraints"></a>

```go
func NameConstraints() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsList</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIds"></a>

```go
func PolicyIds() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509Config
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509Config">DataGooglePrivatecaCertificateAuthorityConfigX509Config</a>

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference <a name="DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>

---


### DataGooglePrivatecaCertificateAuthorityKeySpecList <a name="DataGooglePrivatecaCertificateAuthorityKeySpecList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityKeySpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthorityKeySpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference <a name="DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthorityKeySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersion">CloudKmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpec">DataGooglePrivatecaCertificateAuthorityKeySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CloudKmsKeyVersion`<sup>Required</sup> <a name="CloudKmsKeyVersion" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersion"></a>

```go
func CloudKmsKeyVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthorityKeySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthorityKeySpec">DataGooglePrivatecaCertificateAuthorityKeySpec</a>

---


### DataGooglePrivatecaCertificateAuthoritySubordinateConfigList <a name="DataGooglePrivatecaCertificateAuthoritySubordinateConfigList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthoritySubordinateConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthoritySubordinateConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference <a name="DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChain">PemIssuerChain</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList">DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfig">DataGooglePrivatecaCertificateAuthoritySubordinateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthority"></a>

```go
func CertificateAuthority() *string
```

- *Type:* *string

---

##### `PemIssuerChain`<sup>Required</sup> <a name="PemIssuerChain" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChain"></a>

```go
func PemIssuerChain() DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList">DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthoritySubordinateConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfig">DataGooglePrivatecaCertificateAuthoritySubordinateConfig</a>

---


### DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList <a name="DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.get"></a>

```go
func Get(index *f64) DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference <a name="DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivatecacertificateauthority"

datagoogleprivatecacertificateauthority.NewDataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificates">PemCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PemCertificates`<sup>Required</sup> <a name="PemCertificates" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificates"></a>

```go
func PemCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateAuthority.DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---



