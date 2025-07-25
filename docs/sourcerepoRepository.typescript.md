# `sourcerepoRepository` Submodule <a name="`sourcerepoRepository` Submodule" id="@cdktf/provider-google.sourcerepoRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SourcerepoRepository <a name="SourcerepoRepository" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository google_sourcerepo_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

new sourcerepoRepository.SourcerepoRepository(scope: Construct, id: string, config: SourcerepoRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig">SourcerepoRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig">SourcerepoRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putPubsubConfigs">putPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetCreateIgnoreAlreadyExists">resetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetPubsubConfigs">resetPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPubsubConfigs` <a name="putPubsubConfigs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putPubsubConfigs"></a>

```typescript
public putPubsubConfigs(value: IResolvable | SourcerepoRepositoryPubsubConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putPubsubConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: SourcerepoRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

---

##### `resetCreateIgnoreAlreadyExists` <a name="resetCreateIgnoreAlreadyExists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetCreateIgnoreAlreadyExists"></a>

```typescript
public resetCreateIgnoreAlreadyExists(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPubsubConfigs` <a name="resetPubsubConfigs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetPubsubConfigs"></a>

```typescript
public resetPubsubConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SourcerepoRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isConstruct"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

sourcerepoRepository.SourcerepoRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformElement"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

sourcerepoRepository.SourcerepoRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformResource"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

sourcerepoRepository.SourcerepoRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

sourcerepoRepository.SourcerepoRepository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SourcerepoRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SourcerepoRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SourcerepoRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SourcerepoRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigs">pubsubConfigs</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList">SourcerepoRepositoryPubsubConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference">SourcerepoRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExistsInput">createIgnoreAlreadyExistsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigsInput">pubsubConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pubsubConfigs`<sup>Required</sup> <a name="pubsubConfigs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigs"></a>

```typescript
public readonly pubsubConfigs: SourcerepoRepositoryPubsubConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList">SourcerepoRepositoryPubsubConfigsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeouts"></a>

```typescript
public readonly timeouts: SourcerepoRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference">SourcerepoRepositoryTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `createIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="createIgnoreAlreadyExistsInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExistsInput"></a>

```typescript
public readonly createIgnoreAlreadyExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubConfigsInput`<sup>Optional</sup> <a name="pubsubConfigsInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigsInput"></a>

```typescript
public readonly pubsubConfigsInput: IResolvable | SourcerepoRepositoryPubsubConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SourcerepoRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

---

##### `createIgnoreAlreadyExists`<sup>Required</sup> <a name="createIgnoreAlreadyExists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExists"></a>

```typescript
public readonly createIgnoreAlreadyExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SourcerepoRepositoryConfig <a name="SourcerepoRepositoryConfig" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

const sourcerepoRepositoryConfig: sourcerepoRepository.SourcerepoRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.name">name</a></code> | <code>string</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#id SourcerepoRepository#id}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#project SourcerepoRepository#project}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.pubsubConfigs">pubsubConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]</code> | pubsub_configs block. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#name SourcerepoRepository#name}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.createIgnoreAlreadyExists"></a>

```typescript
public readonly createIgnoreAlreadyExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#create_ignore_already_exists SourcerepoRepository#create_ignore_already_exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#id SourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#project SourcerepoRepository#project}.

---

##### `pubsubConfigs`<sup>Optional</sup> <a name="pubsubConfigs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.pubsubConfigs"></a>

```typescript
public readonly pubsubConfigs: IResolvable | SourcerepoRepositoryPubsubConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#pubsub_configs SourcerepoRepository#pubsub_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SourcerepoRepositoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#timeouts SourcerepoRepository#timeouts}

---

### SourcerepoRepositoryPubsubConfigs <a name="SourcerepoRepositoryPubsubConfigs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

const sourcerepoRepositoryPubsubConfigs: sourcerepoRepository.SourcerepoRepositoryPubsubConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.messageFormat">messageFormat</a></code> | <code>string</code> | The format of the Cloud Pub/Sub messages. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#topic SourcerepoRepository#topic}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Email address of the service account used for publishing Cloud Pub/Sub messages. |

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

The format of the Cloud Pub/Sub messages.

PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#message_format SourcerepoRepository#message_format}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#topic SourcerepoRepository#topic}.

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Email address of the service account used for publishing Cloud Pub/Sub messages.

This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#service_account_email SourcerepoRepository#service_account_email}

---

### SourcerepoRepositoryTimeouts <a name="SourcerepoRepositoryTimeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

const sourcerepoRepositoryTimeouts: sourcerepoRepository.SourcerepoRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#create SourcerepoRepository#create}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#delete SourcerepoRepository#delete}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#update SourcerepoRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#create SourcerepoRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#delete SourcerepoRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/sourcerepo_repository#update SourcerepoRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SourcerepoRepositoryPubsubConfigsList <a name="SourcerepoRepositoryPubsubConfigsList" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

new sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.get"></a>

```typescript
public get(index: number): SourcerepoRepositoryPubsubConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SourcerepoRepositoryPubsubConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>[]

---


### SourcerepoRepositoryPubsubConfigsOutputReference <a name="SourcerepoRepositoryPubsubConfigsOutputReference" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

new sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SourcerepoRepositoryPubsubConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>

---


### SourcerepoRepositoryTimeoutsOutputReference <a name="SourcerepoRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { sourcerepoRepository } from '@cdktf/provider-google'

new sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SourcerepoRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

---



