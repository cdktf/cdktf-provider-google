# `dataGoogleAppEngineDefaultServiceAccount` Submodule <a name="`dataGoogleAppEngineDefaultServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAppEngineDefaultServiceAccount <a name="DataGoogleAppEngineDefaultServiceAccount" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/app_engine_default_service_account google_app_engine_default_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer"></a>

```typescript
import { dataGoogleAppEngineDefaultServiceAccount } from '@cdktf/provider-google'

new dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount(scope: Construct, id: string, config?: DataGoogleAppEngineDefaultServiceAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig">DataGoogleAppEngineDefaultServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig">DataGoogleAppEngineDefaultServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleAppEngineDefaultServiceAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct"></a>

```typescript
import { dataGoogleAppEngineDefaultServiceAccount } from '@cdktf/provider-google'

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement"></a>

```typescript
import { dataGoogleAppEngineDefaultServiceAccount } from '@cdktf/provider-google'

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource"></a>

```typescript
import { dataGoogleAppEngineDefaultServiceAccount } from '@cdktf/provider-google'

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport"></a>

```typescript
import { dataGoogleAppEngineDefaultServiceAccount } from '@cdktf/provider-google'

dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleAppEngineDefaultServiceAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAppEngineDefaultServiceAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAppEngineDefaultServiceAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/app_engine_default_service_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAppEngineDefaultServiceAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAppEngineDefaultServiceAccountConfig <a name="DataGoogleAppEngineDefaultServiceAccountConfig" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.Initializer"></a>

```typescript
import { dataGoogleAppEngineDefaultServiceAccount } from '@cdktf/provider-google'

const dataGoogleAppEngineDefaultServiceAccountConfig: dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}.

---



