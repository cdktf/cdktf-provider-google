# `orgPolicyCustomConstraint` Submodule <a name="`orgPolicyCustomConstraint` Submodule" id="@cdktf/provider-google.orgPolicyCustomConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyCustomConstraint <a name="OrgPolicyCustomConstraint" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint google_org_policy_custom_constraint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

new orgPolicyCustomConstraint.OrgPolicyCustomConstraint(scope: Construct, id: string, config: OrgPolicyCustomConstraintConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig">OrgPolicyCustomConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig">OrgPolicyCustomConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts"></a>

```typescript
public putTimeouts(value: OrgPolicyCustomConstraintTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrgPolicyCustomConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrgPolicyCustomConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrgPolicyCustomConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference">OrgPolicyCustomConstraintTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypesInput">methodTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypes">methodTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeouts"></a>

```typescript
public readonly timeouts: OrgPolicyCustomConstraintTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference">OrgPolicyCustomConstraintTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `methodTypesInput`<sup>Optional</sup> <a name="methodTypesInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypesInput"></a>

```typescript
public readonly methodTypesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OrgPolicyCustomConstraintTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypes"></a>

```typescript
public readonly methodTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyCustomConstraintConfig <a name="OrgPolicyCustomConstraintConfig" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.Initializer"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

const orgPolicyCustomConstraintConfig: orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.actionType">actionType</a></code> | <code>string</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.condition">condition</a></code> | <code>string</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.methodTypes">methodTypes</a></code> | <code>string[]</code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.name">name</a></code> | <code>string</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.description">description</a></code> | <code>string</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.displayName">displayName</a></code> | <code>string</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#action_type OrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#condition OrgPolicyCustomConstraint#condition}

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.methodTypes"></a>

```typescript
public readonly methodTypes: string[];
```

- *Type:* string[]

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#method_types OrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#name OrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#parent OrgPolicyCustomConstraint#parent}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#resource_types OrgPolicyCustomConstraint#resource_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#description OrgPolicyCustomConstraint#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#display_name OrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OrgPolicyCustomConstraintTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#timeouts OrgPolicyCustomConstraint#timeouts}

---

### OrgPolicyCustomConstraintTimeouts <a name="OrgPolicyCustomConstraintTimeouts" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.Initializer"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

const orgPolicyCustomConstraintTimeouts: orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyCustomConstraintTimeoutsOutputReference <a name="OrgPolicyCustomConstraintTimeoutsOutputReference" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer"></a>

```typescript
import { orgPolicyCustomConstraint } from '@cdktf/provider-google'

new orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrgPolicyCustomConstraintTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---



