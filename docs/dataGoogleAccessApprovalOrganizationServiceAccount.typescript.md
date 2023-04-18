# `data_google_access_approval_organization_service_account`

Refer to the Terraform Registory for docs: [`data_google_access_approval_organization_service_account`](https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account).

# `dataGoogleAccessApprovalOrganizationServiceAccount` Submodule <a name="`dataGoogleAccessApprovalOrganizationServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessApprovalOrganizationServiceAccount <a name="DataGoogleAccessApprovalOrganizationServiceAccount" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account google_access_approval_organization_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer"></a>

```typescript
import { dataGoogleAccessApprovalOrganizationServiceAccount } from '@cdktf/provider-google'

new dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount(scope: Construct, id: string, config: DataGoogleAccessApprovalOrganizationServiceAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig">DataGoogleAccessApprovalOrganizationServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig">DataGoogleAccessApprovalOrganizationServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct"></a>

```typescript
import { dataGoogleAccessApprovalOrganizationServiceAccount } from '@cdktf/provider-google'

dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement"></a>

```typescript
import { dataGoogleAccessApprovalOrganizationServiceAccount } from '@cdktf/provider-google'

dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource"></a>

```typescript
import { dataGoogleAccessApprovalOrganizationServiceAccount } from '@cdktf/provider-google'

dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.accountEmail">accountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountEmail`<sup>Required</sup> <a name="accountEmail" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.accountEmail"></a>

```typescript
public readonly accountEmail: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessApprovalOrganizationServiceAccountConfig <a name="DataGoogleAccessApprovalOrganizationServiceAccountConfig" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.Initializer"></a>

```typescript
import { dataGoogleAccessApprovalOrganizationServiceAccount } from '@cdktf/provider-google'

const dataGoogleAccessApprovalOrganizationServiceAccountConfig: dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#organization_id DataGoogleAccessApprovalOrganizationServiceAccount#organization_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#id DataGoogleAccessApprovalOrganizationServiceAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#organization_id DataGoogleAccessApprovalOrganizationServiceAccount#organization_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#id DataGoogleAccessApprovalOrganizationServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



