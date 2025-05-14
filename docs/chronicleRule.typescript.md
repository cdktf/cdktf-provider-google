# `chronicleRule` Submodule <a name="`chronicleRule` Submodule" id="@cdktf/provider-google.chronicleRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRule <a name="ChronicleRule" id="@cdktf/provider-google.chronicleRule.ChronicleRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule google_chronicle_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRule(scope: Construct, id: string, config: ChronicleRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig">ChronicleRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig">ChronicleRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.chronicleRule.ChronicleRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRule.ChronicleRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isConstruct"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

chronicleRule.ChronicleRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformElement"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

chronicleRule.ChronicleRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformResource"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

chronicleRule.ChronicleRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

chronicleRule.ChronicleRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChronicleRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.allowedRunFrequencies">allowedRunFrequencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationDiagnostics">compilationDiagnostics</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList">ChronicleRuleCompilationDiagnosticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationState">compilationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.dataTables">dataTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.nearRealTimeLiveRuleEligible">nearRealTimeLiveRuleEligible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.referenceLists">referenceLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionCreateTime">revisionCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList">ChronicleRuleSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference">ChronicleRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.text">text</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedRunFrequencies`<sup>Required</sup> <a name="allowedRunFrequencies" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.allowedRunFrequencies"></a>

```typescript
public readonly allowedRunFrequencies: string[];
```

- *Type:* string[]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `compilationDiagnostics`<sup>Required</sup> <a name="compilationDiagnostics" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationDiagnostics"></a>

```typescript
public readonly compilationDiagnostics: ChronicleRuleCompilationDiagnosticsList;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList">ChronicleRuleCompilationDiagnosticsList</a>

---

##### `compilationState`<sup>Required</sup> <a name="compilationState" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationState"></a>

```typescript
public readonly compilationState: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataTables`<sup>Required</sup> <a name="dataTables" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.dataTables"></a>

```typescript
public readonly dataTables: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nearRealTimeLiveRuleEligible`<sup>Required</sup> <a name="nearRealTimeLiveRuleEligible" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.nearRealTimeLiveRuleEligible"></a>

```typescript
public readonly nearRealTimeLiveRuleEligible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `referenceLists`<sup>Required</sup> <a name="referenceLists" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.referenceLists"></a>

```typescript
public readonly referenceLists: string[];
```

- *Type:* string[]

---

##### `revisionCreateTime`<sup>Required</sup> <a name="revisionCreateTime" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionCreateTime"></a>

```typescript
public readonly revisionCreateTime: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.severity"></a>

```typescript
public readonly severity: ChronicleRuleSeverityList;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList">ChronicleRuleSeverityList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference">ChronicleRuleTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRuleCompilationDiagnostics <a name="ChronicleRuleCompilationDiagnostics" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

const chronicleRuleCompilationDiagnostics: chronicleRule.ChronicleRuleCompilationDiagnostics = { ... }
```


### ChronicleRuleCompilationDiagnosticsPosition <a name="ChronicleRuleCompilationDiagnosticsPosition" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

const chronicleRuleCompilationDiagnosticsPosition: chronicleRule.ChronicleRuleCompilationDiagnosticsPosition = { ... }
```


### ChronicleRuleConfig <a name="ChronicleRuleConfig" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

const chronicleRuleConfig: chronicleRule.ChronicleRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Policy to determine if the rule should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.etag">etag</a></code> | <code>string</code> | The etag for this rule. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#id ChronicleRule#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#project ChronicleRule#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.ruleId">ruleId</a></code> | <code>string</code> | Rule Id is the ID of the Rule. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.scope">scope</a></code> | <code>string</code> | Resource name of the DataAccessScope bound to this rule. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.text">text</a></code> | <code>string</code> | The YARA-L content of the rule. Populated in FULL view. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#instance ChronicleRule#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#location ChronicleRule#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Policy to determine if the rule should be deleted forcefully.

If deletion_policy = "FORCE", any retrohunts and any detections associated with the rule
will also be deleted. If deletion_policy = "DEFAULT", the call will only succeed if the
rule has no associated retrohunts, including completed retrohunts, and no
associated detections. Regardless of this field's value, the rule
deployment associated with this rule will also be deleted.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#deletion_policy ChronicleRule#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

The etag for this rule.

If this is provided on update, the request will succeed if and only if it
matches the server-computed value, and will fail with an ABORTED error
otherwise.
Populated in BASIC view and FULL view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#etag ChronicleRule#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#id ChronicleRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#project ChronicleRule#project}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Rule Id is the ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#rule_id ChronicleRule#rule_id}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Resource name of the DataAccessScope bound to this rule.

Populated in BASIC view and FULL view.
If reference lists are used in the rule, validations will be performed
against this scope to ensure that the reference lists are compatible with
both the user's and the rule's scopes.
The scope should be in the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#scope ChronicleRule#scope}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The YARA-L content of the rule. Populated in FULL view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#text ChronicleRule#text}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#timeouts ChronicleRule#timeouts}

---

### ChronicleRuleSeverity <a name="ChronicleRuleSeverity" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

const chronicleRuleSeverity: chronicleRule.ChronicleRuleSeverity = { ... }
```


### ChronicleRuleTimeouts <a name="ChronicleRuleTimeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

const chronicleRuleTimeouts: chronicleRule.ChronicleRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#create ChronicleRule#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#delete ChronicleRule#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#update ChronicleRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#create ChronicleRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#delete ChronicleRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/chronicle_rule#update ChronicleRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRuleCompilationDiagnosticsList <a name="ChronicleRuleCompilationDiagnosticsList" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleCompilationDiagnosticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.get"></a>

```typescript
public get(index: number): ChronicleRuleCompilationDiagnosticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleRuleCompilationDiagnosticsOutputReference <a name="ChronicleRuleCompilationDiagnosticsOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.position">position</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList">ChronicleRuleCompilationDiagnosticsPositionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics">ChronicleRuleCompilationDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.position"></a>

```typescript
public readonly position: ChronicleRuleCompilationDiagnosticsPositionList;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList">ChronicleRuleCompilationDiagnosticsPositionList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleRuleCompilationDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics">ChronicleRuleCompilationDiagnostics</a>

---


### ChronicleRuleCompilationDiagnosticsPositionList <a name="ChronicleRuleCompilationDiagnosticsPositionList" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.get"></a>

```typescript
public get(index: number): ChronicleRuleCompilationDiagnosticsPositionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleRuleCompilationDiagnosticsPositionOutputReference <a name="ChronicleRuleCompilationDiagnosticsPositionOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endColumn">endColumn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endLine">endLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startColumn">startColumn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startLine">startLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition">ChronicleRuleCompilationDiagnosticsPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endColumn`<sup>Required</sup> <a name="endColumn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endColumn"></a>

```typescript
public readonly endColumn: number;
```

- *Type:* number

---

##### `endLine`<sup>Required</sup> <a name="endLine" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endLine"></a>

```typescript
public readonly endLine: number;
```

- *Type:* number

---

##### `startColumn`<sup>Required</sup> <a name="startColumn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startColumn"></a>

```typescript
public readonly startColumn: number;
```

- *Type:* number

---

##### `startLine`<sup>Required</sup> <a name="startLine" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startLine"></a>

```typescript
public readonly startLine: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleRuleCompilationDiagnosticsPosition;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition">ChronicleRuleCompilationDiagnosticsPosition</a>

---


### ChronicleRuleSeverityList <a name="ChronicleRuleSeverityList" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleSeverityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.get"></a>

```typescript
public get(index: number): ChronicleRuleSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleRuleSeverityOutputReference <a name="ChronicleRuleSeverityOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleSeverityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity">ChronicleRuleSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleRuleSeverity;
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity">ChronicleRuleSeverity</a>

---


### ChronicleRuleTimeoutsOutputReference <a name="ChronicleRuleTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleRule } from '@cdktf/provider-google'

new chronicleRule.ChronicleRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a>

---



