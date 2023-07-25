# `data_google_storage_project_service_account`

Refer to the Terraform Registory for docs: [`data_google_storage_project_service_account`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account).

# `dataGoogleStorageProjectServiceAccount` Submodule <a name="`dataGoogleStorageProjectServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageProjectServiceAccount <a name="DataGoogleStorageProjectServiceAccount" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account google_storage_project_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer"></a>

```typescript
import { dataGoogleStorageProjectServiceAccount } from '@cdktf/provider-google'

new dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount(scope: Construct, id: string, config?: DataGoogleStorageProjectServiceAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig">DataGoogleStorageProjectServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig">DataGoogleStorageProjectServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetUserProject">resetUserProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetUserProject` <a name="resetUserProject" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.resetUserProject"></a>

```typescript
public resetUserProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isConstruct"></a>

```typescript
import { dataGoogleStorageProjectServiceAccount } from '@cdktf/provider-google'

dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformElement"></a>

```typescript
import { dataGoogleStorageProjectServiceAccount } from '@cdktf/provider-google'

dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageProjectServiceAccount } from '@cdktf/provider-google'

dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.userProjectInput">userProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.userProject">userProject</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `userProjectInput`<sup>Optional</sup> <a name="userProjectInput" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.userProjectInput"></a>

```typescript
public readonly userProjectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `userProject`<sup>Required</sup> <a name="userProject" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.userProject"></a>

```typescript
public readonly userProject: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageProjectServiceAccountConfig <a name="DataGoogleStorageProjectServiceAccountConfig" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.Initializer"></a>

```typescript
import { dataGoogleStorageProjectServiceAccount } from '@cdktf/provider-google'

const dataGoogleStorageProjectServiceAccountConfig: dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account#id DataGoogleStorageProjectServiceAccount#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account#project DataGoogleStorageProjectServiceAccount#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.userProject">userProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account#user_project DataGoogleStorageProjectServiceAccount#user_project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account#id DataGoogleStorageProjectServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account#project DataGoogleStorageProjectServiceAccount#project}.

---

##### `userProject`<sup>Optional</sup> <a name="userProject" id="@cdktf/provider-google.dataGoogleStorageProjectServiceAccount.DataGoogleStorageProjectServiceAccountConfig.property.userProject"></a>

```typescript
public readonly userProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/storage_project_service_account#user_project DataGoogleStorageProjectServiceAccount#user_project}.

---



