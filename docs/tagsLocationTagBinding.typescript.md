# `tagsLocationTagBinding` Submodule <a name="`tagsLocationTagBinding` Submodule" id="@cdktf/provider-google.tagsLocationTagBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagsLocationTagBinding <a name="TagsLocationTagBinding" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding google_tags_location_tag_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

new tagsLocationTagBinding.TagsLocationTagBinding(scope: Construct, id: string, config: TagsLocationTagBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig">TagsLocationTagBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig">TagsLocationTagBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: TagsLocationTagBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagsLocationTagBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isConstruct"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

tagsLocationTagBinding.TagsLocationTagBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TagsLocationTagBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagsLocationTagBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagsLocationTagBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TagsLocationTagBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference">TagsLocationTagBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeouts"></a>

```typescript
public readonly timeouts: TagsLocationTagBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference">TagsLocationTagBindingTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TagsLocationTagBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagsLocationTagBindingConfig <a name="TagsLocationTagBindingConfig" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.Initializer"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

const tagsLocationTagBindingConfig: tagsLocationTagBinding.TagsLocationTagBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.parent">parent</a></code> | <code>string</code> | The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.tagValue">tagValue</a></code> | <code>string</code> | The TagValue of the TagBinding. Must be of the form tagValues/456. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#id TagsLocationTagBinding#id}. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#parent TagsLocationTagBinding#parent}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

The TagValue of the TagBinding. Must be of the form tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#tag_value TagsLocationTagBinding#tag_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#id TagsLocationTagBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#location TagsLocationTagBinding#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TagsLocationTagBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#timeouts TagsLocationTagBinding#timeouts}

---

### TagsLocationTagBindingTimeouts <a name="TagsLocationTagBindingTimeouts" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.Initializer"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

const tagsLocationTagBindingTimeouts: tagsLocationTagBinding.TagsLocationTagBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#create TagsLocationTagBinding#create}. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#delete TagsLocationTagBinding#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#create TagsLocationTagBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/tags_location_tag_binding#delete TagsLocationTagBinding#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### TagsLocationTagBindingTimeoutsOutputReference <a name="TagsLocationTagBindingTimeoutsOutputReference" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { tagsLocationTagBinding } from '@cdktf/provider-google'

new tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagsLocationTagBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.tagsLocationTagBinding.TagsLocationTagBindingTimeouts">TagsLocationTagBindingTimeouts</a>

---



